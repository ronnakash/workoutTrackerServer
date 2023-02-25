import { Entity, Column, ObjectIdColumn } from "typeorm";
import { Workout } from "./workout.interfaces";
import { WorkoutExcercise } from "src/workout-excercise/workout-excercise.interfaces";

@Entity()
export class WorkoutEntity implements Workout {
    @ObjectIdColumn()
    _id: string;

    @Column()
    excercises: WorkoutExcercise[];

}
