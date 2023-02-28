import { Entity, Column, ObjectIdColumn } from "typeorm";
import { WorkoutExcercise } from "./workout-excercise.interfaces";
import { Excercise } from "../excercise/excercise.interfaces";
import { ModelEntity } from "../models/models.entity";
import { ModelType } from "../models/models.type";

@Entity()
export class WorkoutExcerciseEntity extends ModelEntity<WorkoutExcercise> {

    public constructor(model? : WorkoutExcercise) {
        super();
        if (model) {
            this.excercise = model.excercise;
            this.reps = model.reps;
            this.sets = model.sets;
        }
    }
    // @ObjectIdColumn()
    // _id: string;

    @Column()
    excercise: Excercise;

    @Column()
    reps: number;

    @Column()
    sets: number;

    toType(): ModelType<WorkoutExcercise> {
        throw new Error("Method not implemented.");
    }

}
