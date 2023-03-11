import { Entity, Column, ObjectIdColumn } from "typeorm";
import { Excercise, WeightedMuscle } from "./excercise.interfaces";
import { ModelEntity } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { ExcerciseType } from "./excercise.type";
import { isNullableType } from "graphql";

@Entity('excercise', { name: 'WorkoutTracker' })
export class ExcerciseEntity extends ModelEntity<Excercise> {
    

    public constructor(model? : Excercise) {
        super();
        if (model){
            this.name = model.name;
            this.workload = model.workload;
            this.musclesWorked = model.musclesWorked;
        }
    }
    
    // @ObjectIdColumn()
    // _id: string;

    @Column()
    name: string;

    @Column()
    workload: number;

    @Column({ type: 'jsonb', array: false, nullable: true })
    musclesWorked: WeightedMuscle[];

    toType(): ModelType<Excercise> {
        return new ExcerciseType(this);
    }

}
