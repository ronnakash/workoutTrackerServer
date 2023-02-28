import { JwtPayload } from 'jsonwebtoken';
import { ModelBase } from '../models/models.interfaces';

//interface to pass params to User constructor

export interface UserLoginProps {
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
    googleLogin?: Boolean;
    picture?: string;
    googleAccessToken?: string;
}

export interface User extends UserProps, ModelBase{
    password: string;
    permissions: string;
    passwordChangedAt: number;
    googleLogin: Boolean;
    picture: string;
}



