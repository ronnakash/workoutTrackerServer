import { ModelEntity } from "../models/models.entity";
import { User } from "./user.interfaces";
import { Column, Entity, PrimaryColumn } from "typeorm";
import { ModelType } from "../models/models.type";
import { UserType } from "./user.type";

@Entity('User')
export class UserEntity extends ModelEntity<User> {    

    public constructor(model? : User) {
        super();
        if (model){
            this.email = model.email;
            this.username = model.username;
            this.password = model.password;
            this.permissions = model.permissions;
            this.googleLogin = model.googleLogin;
            this.picture = model.picture;
        }
    }
    
    // @ObjectIdColumn()
    // _id: string;

    //TODO: make primary column/ indexed
    // @PrimaryColumn()
    @Column()
    email : string;

    @Column()
    username: string;

    @Column()
    password: string;
        
    @Column()
    permissions: string;
        
    @Column()
    passwordChangedAt: number;    

    @Column()
    googleLogin: Boolean;    

    @Column()
    picture: string;


    toType(): ModelType<User> {
        return new UserType(this);
    }


}
