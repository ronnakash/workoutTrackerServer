import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToMany, OneToMany } from "typeorm";
import { Workout } from "./workout.interfaces";
import { WorkoutExercise } from "../workout-exercise/workout-exercise.interfaces";
import { ModelEntity } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { WorkoutType } from "./workout.type";
import { WorkoutExerciseEntity } from "../workout-exercise/workout-exercise.entity";

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
