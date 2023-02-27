import { Entity, Column, ObjectIdColumn } from "typeorm";
import { Workout } from "./workout.interfaces";
import { WorkoutExcercise } from "src/workout-excercise/workout-excercise.interfaces";
import { ModelEntity } from "src/models/models.entity";
import { ModelType } from "src/models/models.type";

@Entity()
export class WorkoutEntity extends ModelEntity<Workout> {

    public constructor(model : Workout) {
        super();
        this.excercises = model.excercises;
    }
    // @ObjectIdColumn()
    // _id: string;

    @Column()
    excercises: WorkoutExcercise[];

    toType(): ModelType<Workout> {
        throw new Error("Method not implemented.");
    }

}