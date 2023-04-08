import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ModelType, ModelTypeWithId } from "../models/models.type";
import { User } from "./user.interfaces";
import { UserEntity } from "./user.entity";

@ObjectType('User')
export class UserType extends ModelTypeWithId<User> {
    
    constructor(userEntity : UserEntity);
    constructor(user : User);


    constructor(user : User | UserEntity) {
        super();
        this._id = user._id;
        this.username = user.username;
        this.email = user.email;
        this.password = user.password || "";
        this.permissions = user.permissions;
        this.passwordChangedAt = user.passwordChangedAt;
        this.googleLogin = user.googleLogin;
        this.picture = user.picture;
    }


    @Field(type => ID)
    _id: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    permissions: string;

    @Field()
    passwordChangedAt: number;

    @Field()
    googleLogin: boolean;

    @Field()
    picture: string;

    
}

