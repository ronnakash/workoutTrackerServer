import { Entity, Column, ObjectIdColumn } from "typeorm";
import { WorkoutExcercise } from "./workout-excercise.interfaces";
import { Excercise } from "src/excercises/excercises.interfaces";
import { ModelEntity } from "src/models/models.entity";

@Entity()
export class WorkoutExcerciseEntity extends ModelEntity<WorkoutExcercise> {
    public constructor(model : WorkoutExcercise) {
        super(model);
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

}
