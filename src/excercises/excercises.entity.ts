import { Entity, Column, ObjectIdColumn } from "typeorm";
import { Excercise, WeightedMuscle } from "./excercises.interfaces";
import { ModelEntity } from "src/models/models.entity";

@Entity()
export class ExcerciseEntity extends ModelEntity<Excercise> {
    
    public constructor(model : Excercise) {
        super(model);
        this.name = model.name;
        this.workload = model.workload;
        this.musclesWorked = model.musclesWorked;
    }
    // @ObjectIdColumn()
    // _id: string;

    @Column()
    name: string;

    @Column()
    workload: number;

    @Column({ type: 'jsonb', array: false })
    musclesWorked: WeightedMuscle[];
}
