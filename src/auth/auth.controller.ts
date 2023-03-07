import { Body, Controller, Delete, Get, Next, Param, Patch, Post, Put, Req, Res } from '@nestjs/common';

import validator from 'validator';
import bcryptjs from 'bcryptjs';
import AppError from '../util/app-error';
import { AuthService } from './auth.service';
import { UserLoginProps, UserProps, UserRegisterProps } from '../user/user.interfaces';
import { UserService } from '../user/user.service';
import { UserEntity } from 'src/user/user.entity';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService, private usersService : UserService) {
    }

    @Put("/register")
    async register(@Body() body : UserRegisterProps) {
        let { username, email, password, permissions } = body;
        let token = body.token;
        //check if user exists
        let users = await this.usersService
            .getAllBy({email})
            // .catch( error => next(error));
        if (users && users.length > 0)
            throw new AppError(`User already exists: ${users[0]}`,400);
        // check that password is strong
        else if (!validator.isStrongPassword(password || ""))
        throw new AppError(`Provided password for user ${username} is too weak`, 400);
        //check token user permission
        else if (permissions === 'Admin' && (!token || (token && !(token.permissions === 'Admin'))))
            throw new AppError(`You are not authorised to create Admin users!`,400);
        //hash password
        const hashPassword = await bcryptjs.hash(password, 10);
        //create user
        const userProps : UserProps = {
            username,
            email,
            password: hashPassword,
            permissions
        };
        //save user
        const user = await this.usersService.createModel(userProps) as UserEntity;
        //make jwt
        const newToken = await this.authService.safeLogin(user);
            // .catch( error => next(error));
        //hide password
        user.password = "";
        return {
            message: `Created new user ${username} sucsessfuly`,
            user: user,
            token: newToken
        };
    
    }

    @Post('/login')
    async login(@Body() body : UserLoginProps) {
        let { username, email, password } = body;
        const user = await this.usersService
            .getOneBy({username, email}) as UserEntity
            // .catch( error => next(error));
        if (user && password){
            if (!await bcryptjs.compare(password, user.password))
                // next(new AppError(`password mismatch for user ${username}`, 400));
                throw new AppError(`password mismatch for user ${username}`, 400);
            const token = this.authService.signJWT(user);
            user.password = "";
            return {
                message: `Auth successful for ${username}`,
                token,
                user
            };
        }
        return { message: "Error!!!!"};
    }



    @Post("/google")
    async googleRegister(@Body() body : {code : string}){
        let {token} = await this.authService.googleCodeExchage(body.code);
        let user = await this.authService.signInWithGoogle(token);
        let jwtToken = await this.authService.safeLogin(user);
        return {
            loginMessage: `Auth successful for ${user.username}`,
            token: jwtToken,
            user
        };    
    }


}

