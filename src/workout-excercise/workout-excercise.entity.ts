import { Entity, Column, ObjectIdColumn } from "typeorm";
import { WorkoutExcercise } from "./workout-excercise.interfaces";
import { Excercise } from "src/excercises/excercises.interfaces";
import { ModelEntity } from "src/models/models.entity";
import { ModelType } from "src/models/models.type";

@Entity()
export class WorkoutExcerciseEntity extends ModelEntity<WorkoutExcercise> {

    public constructor(model : WorkoutExcercise) {
        super();
        this.excercise = model.excercise;
        this.reps = model.reps;
        this.sets = model.sets;
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
