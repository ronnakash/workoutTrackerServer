import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToMany, OneToMany, JoinTable, ManyToOne } from "typeorm";
import { ModelEntity, ModelEntityWithId } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { UserEntity } from "../user/user.entity";
import { WorkoutTemplate } from "./workout-template.interfaces";
import { WorkoutTemplateType } from "./workout-template.type";
import { WorkoutTemplateExerciseEntity } from "../workout-template-exercise/workout-template-exercise.entity";
import { deepPrint } from "../util/deepPrint";

@Entity('workout_template', { name: 'postgres' })
export class WorkoutTemplateEntity extends ModelEntityWithId<WorkoutTemplate> {

    public constructor(model? : Partial<WorkoutTemplate>) {
        super();
        if(model){
            console.log("WorkoutTemplateEntity ");
            deepPrint(model);        
            this._id = model._id;
            this.exercises = model.exercises.map(e => new WorkoutTemplateExerciseEntity(e));
            this.author = new UserEntity(model.author);
        }
    }

    @OneToMany(() => WorkoutTemplateExerciseEntity, workoutTemplateExercise => workoutTemplateExercise.workout)
    exercises: WorkoutTemplateExerciseEntity[];
 
    @ManyToOne(() => UserEntity, user => user.workouts, { 
            lazy: true,
            onUpdate: 'CASCADE', onDelete: 'CASCADE', 
            cascade: [/*"insert"*/, "update", "soft-remove"]
        })
    @JoinColumn()
    author: UserEntity;


    @Column()
    title: string;

    toType(): ModelType<WorkoutTemplate> {
        return new WorkoutTemplateType(this);
    }

}
