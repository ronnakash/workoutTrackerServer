import { Entity, Column, ObjectIdColumn } from "typeorm";
import { Workout } from "./workout.interfaces";
import { WorkoutExcercise } from "src/workout-excercise/workout-excercise.interfaces";
import { ModelEntity } from "src/models/models.entity";

@Entity()
export class WorkoutEntity extends ModelEntity<Workout> {
    public constructor(model : Workout) {
        super(model);
        this.excercises = model.excercises;
    }
    // @ObjectIdColumn()
    // _id: string;

    @Column()
    excercises: WorkoutExcercise[];

}
