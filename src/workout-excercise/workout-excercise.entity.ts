import { Entity, Column, ObjectIdColumn } from "typeorm";
import { WorkoutExercise } from "./workout-excercise.interfaces";
import { Exercise } from "../excercise/excercise.interfaces";
import { ModelEntity } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { WorkoutExerciseType } from "./workout-excercise.type";

@Entity('workout_exercise', { name: 'workout_tracker' })
export class WorkoutExerciseEntity extends ModelEntity<WorkoutExercise> {

    public constructor(model? : WorkoutExercise) {
        super();
        if (model) {
            this.exercise = model.exercise;
            this.reps = model.reps;
            this.sets = model.sets;
        }
    }


    @Column()
    exercise: Exercise;

    @Column()
    reps: number;

    @Column()
    sets: number;

    toType(): ModelType<WorkoutExercise> {
        return new WorkoutExerciseType(this);
    }

}
