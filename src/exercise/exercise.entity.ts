import { Entity, Column, ObjectIdColumn } from "typeorm";
import { Exercise, WeightedMuscle } from "./exercise.interfaces";
import { ModelEntity } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { ExerciseType } from "./exercise.type";
import { isNullableType } from "graphql";

@Entity('exercise', { name: 'postgres' })
export class ExerciseEntity extends ModelEntity<Exercise> {
    

    public constructor(model? : Exercise) {
        super();
        if (model){
            this.name = model.name;
            this.workload = model.workload;
            // this.musclesWorked = model.musclesWorked;
        }
    }
    
    // @ObjectIdColumn()
    // _id: string;

    @Column()
    name: string;

    @Column()
    workload: number;

    // @Column({ type: 'json', array: false, nullable: true })
    // musclesWorked: WeightedMuscle[];

    toType(): ModelType<Exercise> {
        return new ExerciseType(this);
    }

}
