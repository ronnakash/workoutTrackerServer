import { JwtPayload } from 'jsonwebtoken';
import { ModelBase, ModelBaseWithId } from '../models/models.interfaces';
import { Field, InputType } from '@nestjs/graphql';

//interface to pass params to User constructor

export interface UserBase {
    username?: string;
    email? : string;
    password?: string;
}


export interface UserLoginProps extends UserBase{
    username: string;
    email : string;
    password?: string;
}

// export interface UserChangePasswordProps  {
//     // oldPassword: string;
//     user: UserDocument
//     newPassword: string;
// }

export interface UserRegisterProps extends UserLoginProps {
    password: string;
    permissions: string;
    token?: JwtPayload;
}

export interface UserProps extends UserLoginProps{
    username: string;
    email : string;
    password?: string;
    permissions?: string;
    googleLogin?: boolean;
    picture?: string;
    googleAccessToken?: string;
}

export interface User extends UserProps, ModelBaseWithId{
    permissions: string;
    passwordChangedAt: number;
    googleLogin: boolean;
    picture: string;
}

export interface UserWithPassword extends User{
    password: string;
}


@InputType()
export class UserInput implements UserLoginProps{
    
    @Field()
    username: string;
    
    @Field()
    email: string;
    
    @Field()
    password?: string;
    

}