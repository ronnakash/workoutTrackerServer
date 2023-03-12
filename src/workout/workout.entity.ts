import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToMany, OneToMany } from "typeorm";
import { Workout } from "./workout.interfaces";
import { WorkoutExercise } from "../workout-excercise/workout-excercise.interfaces";
import { ModelEntity } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { WorkoutType } from "./workout.type";
import { WorkoutExerciseEntity } from "../workout-excercise/workout-excercise.entity";

@Entity('workout', { name: 'postgres' })
export class WorkoutEntity extends ModelEntity<Workout> {

    public constructor(model? : Workout) {
        super();
        if(model){
            this._id = model._id;
            this.exercises = model.exercises.map(e => new WorkoutExerciseEntity(e));
        }
    }

    @OneToMany(() => WorkoutExerciseEntity, workoutExercise => workoutExercise.workout)
    exercises: WorkoutExerciseEntity[];

    toType(): ModelType<Workout> {
        return new WorkoutType(this);
    }

}
