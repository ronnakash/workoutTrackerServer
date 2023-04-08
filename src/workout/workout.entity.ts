import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToMany, OneToMany, JoinTable, ManyToOne } from "typeorm";
import { Workout } from "./workout.interfaces";
import { WorkoutExercise } from "../workout-exercise/workout-exercise.interfaces";
import { ModelEntity, ModelEntityWithId } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { WorkoutType } from "./workout.type";
import { WorkoutExerciseEntity } from "../workout-exercise/workout-exercise.entity";
import { ExerciseEntity } from "../exercise/exercise.entity";
import { UserEntity } from "../user/user.entity";
import { WorkoutTemplateEntity } from "../workout-template/workout-template.entity";

@Entity('workout', { name: 'postgres' })
export class WorkoutEntity extends ModelEntityWithId<Workout> {

    public constructor(model? : Partial<Workout>) {
        super();
        if(model){
            this._id = model._id;
            this.exercises = model.exercises.map(e => new WorkoutExerciseEntity(e));
            this.author = new UserEntity(model.author);
        }
    }

    @OneToMany(() => WorkoutExerciseEntity, workoutExercise => workoutExercise.workout)
    exercises: WorkoutExerciseEntity[];
 
    @ManyToOne(() => UserEntity, user => user.workouts, { lazy: true })
    @JoinColumn()
    author: UserEntity;

    @ManyToOne(() => WorkoutTemplateEntity, { lazy: true })
    @JoinColumn()
    template: WorkoutTemplateEntity;

    @Column()
    title: string;

    toType(): ModelType<Workout> {
        return new WorkoutType(this);
    }

}
