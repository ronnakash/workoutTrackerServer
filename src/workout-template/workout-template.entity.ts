import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToMany, OneToMany, JoinTable, ManyToOne } from "typeorm";
import { ModelEntity, ModelEntityWithId } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { UserEntity } from "../user/user.entity";
import { WorkoutTemplate } from "./workout-template.interfaces";
import { WorkoutTemplateType } from "./workout-template.type";
import { WorkoutTemplateExerciseEntity } from "../workout-template-exercise/workout-template-exercise.entity";

@Entity('workout_template', { name: 'postgres' })
export class WorkoutTemplateEntity extends ModelEntityWithId<WorkoutTemplate> {

    public constructor(model? : WorkoutTemplate) {
        super();
        if(model){
            this._id = model._id;
            this.exercises = model.exercises.map(e => new WorkoutTemplateExerciseEntity(e));
            this.author = new UserEntity(model.author);
        }
    }

    @OneToMany(() => WorkoutTemplateExerciseEntity, workoutTemplateExercise => workoutTemplateExercise.workout)
    exercises: WorkoutTemplateExerciseEntity[];
 
    @ManyToOne(() => UserEntity, user => user.workouts, { lazy: true })
    @JoinColumn()
    author: UserEntity;


    @Column()
    title: string;

    toType(): ModelType<WorkoutTemplate> {
        return new WorkoutTemplateType(this);
    }

}
