import { Entity, Column } from "typeorm";
import { Excercise, WeightedMuscle } from "./excercises.interfaces";

@Entity()
export class ExcerciseEntity implements Excercise {
    id: string;
    name: string;
    workload: number;
    @Column({ type: 'jsonb', array: false })
    musclesWorked: WeightedMuscle[];
}
