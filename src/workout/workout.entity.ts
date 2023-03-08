import { Entity, Column, ObjectIdColumn } from "typeorm";
import { Workout } from "./workout.interfaces";
import { WorkoutExcercise } from "../workout-excercise/workout-excercise.interfaces";
import { ModelEntity } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { WorkoutType } from "./workout.type";

@Entity('workout', { name: 'WorkoutTracker' })
export class WorkoutEntity extends ModelEntity<Workout> {

    public constructor(model? : Workout) {
        super();
        if(model){
            this._id = model._id;
            this.excercises = model.excercises;
        }
    }


    @Column()
    excercises: WorkoutExcercise[];

    toType(): ModelType<Workout> {
        return new WorkoutType(this);
    }

}
