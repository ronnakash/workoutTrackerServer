import { Entity, Column, ObjectIdColumn } from "typeorm";
import { WorkoutExcercise } from "./workout-excercise.interfaces";
import { Excercise } from "src/excercises/excercises.interfaces";

@Entity()
export class WorkoutExcerciseEntity implements WorkoutExcercise {

    @ObjectIdColumn()
    _id: string;

    @Column()
    excercise: Excercise;

    @Column()
    reps: number;

    @Column()
    sets: number;

}
