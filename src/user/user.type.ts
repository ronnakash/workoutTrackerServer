import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ModelType } from "src/models/models.type";
import { User } from "./user.interfaces";
import { UserEntity } from "./user.entity";

@ObjectType('User')
export class UserType extends ModelType<User> {
    
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

