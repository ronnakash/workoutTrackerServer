import { Entity, Column, ObjectIdColumn } from "typeorm";
import { Excercise, WeightedMuscle } from "./excercises.interfaces";

@Entity()
export class ExcerciseEntity implements Excercise {

    @ObjectIdColumn()
    _id: string;

    @Column()
    name: string;

    @Column()
    workload: number;

    @Column({ type: 'jsonb', array: false })
    musclesWorked: WeightedMuscle[];
}
