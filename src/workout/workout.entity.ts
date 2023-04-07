import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToMany, OneToMany, JoinTable, ManyToOne } from "typeorm";
import { Workout } from "./workout.interfaces";
import { WorkoutExercise } from "../workout-exercise/workout-exercise.interfaces";
import { ModelEntity, ModelEntityWithId } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { WorkoutType } from "./workout.type";
import { WorkoutExerciseEntity } from "../workout-exercise/workout-exercise.entity";
import { ExerciseEntity } from "../exercise/exercise.entity";
import { UserEntity } from "../user/user.entity";

@Entity('workout', { name: 'postgres' })
export class WorkoutEntity extends ModelEntityWithId<Workout> {

    public constructor(model? : Workout) {
        super();
        if(model){
            this._id = model._id;
            this.exercises = model.exercises.map(e => new WorkoutExerciseEntity(e));
        }
    }

    @OneToMany(() => WorkoutExerciseEntity, workoutExercise => workoutExercise.workout)
    exercises: WorkoutExerciseEntity[];
 
    @ManyToOne(() => UserEntity, user => user.workouts, { lazy: true })
    @JoinColumn()
    author: Promise<UserEntity>;


    @Column()
    title: string;

    toType(): ModelType<Workout> {
        return new WorkoutType(this);
    }

}
