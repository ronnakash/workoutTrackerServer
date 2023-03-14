import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ModelType, ModelTypeWithId } from "../models/models.type";
import { User } from "./user.interfaces";
import { UserEntity } from "./user.entity";

@ObjectType('User')
export class UserType extends ModelTypeWithId<User> {
    
    constructor(userEntity: UserEntity) {
        super();
        
    }

    @Field(type => ID)
    id: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    picture: string;

    
}

