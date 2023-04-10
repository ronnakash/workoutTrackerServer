import { ModelEntity, ModelEntityWithId } from "../models/models.entity";
import { User } from "./user.interfaces";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ModelType } from "../models/models.type";
import { UserType } from "./user.type";
import { WorkoutEntity } from "../workout/workout.entity";
import { deepPrint } from "../util/deepPrint";

@Entity('app_user', { name: 'postgres' })
export class UserEntity extends ModelEntityWithId<User> {    

    public constructor(model? : User) {
        super();
        if (model){
            console.log("UserEntity ");
            deepPrint(model);    
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
    googleLogin: boolean;    

    @Column()
    picture: string;

    @OneToMany(() => WorkoutEntity, workout => workout.author, { lazy: true })
    workouts: Promise<WorkoutEntity[]>;


    toType(): ModelType<User> {
        return new UserType(this);
    }


}
