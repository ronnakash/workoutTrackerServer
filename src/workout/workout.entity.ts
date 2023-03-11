import { Entity, Column, ObjectIdColumn } from "typeorm";
import { Workout } from "./workout.interfaces";
import { WorkoutExercise } from "../workout-excercise/workout-excercise.interfaces";
import { ModelEntity } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { WorkoutType } from "./workout.type";
import { WorkoutExerciseEntity } from "../workout-excercise/workout-excercise.entity";

@Entity('workout', { name: 'workout_tracker' })
export class WorkoutEntity extends ModelEntity<Workout> {

    public constructor(model? : Workout) {
        super();
        if(model){
            this._id = model._id;
            this.exercises = model.exercises.map(e => new WorkoutExerciseEntity(e));
        }
    }


    @Column()
    exercises: WorkoutExerciseEntity[];

    toType(): ModelType<Workout> {
        return new WorkoutType(this);
    }

}
