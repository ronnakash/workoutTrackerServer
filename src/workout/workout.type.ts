import { ObjectType, Field, ID } from "@nestjs/graphql";
import { ModelType } from "../models/models.type";
import { Workout } from "./workout.interfaces";
import { WorkoutExcerciseType } from "../workout-excercise/workout-excercise.type";
import { WorkoutEntity } from "./workout.entity";
import { WorkoutExcerciseEntity } from "../workout-excercise/workout-excercise.entity";

@ObjectType('Workout')
export class WorkoutType extends ModelType<Workout> {

    constructor(workoutEntity: WorkoutEntity);
    constructor(workout: Workout);

    constructor(workoutEntity?: WorkoutEntity, workout?: Workout) {
        super();
        if (workoutEntity){
            this._id = workoutEntity._id;
            this.excercises = workoutEntity.excercises?.map((e : WorkoutExcerciseEntity) => {
                // console.log(typeof e);
                return new WorkoutExcerciseType(e);
            });    
        }
        else if (workout) {
            this._id = workout._id;
            this.excercises = workout.excercises?.map(e => new WorkoutExcerciseType(e));    
        }
    }

    @Field(type => ID)
    _id: string;

    @Field(type => [WorkoutExcerciseType])
    excercises: WorkoutExcerciseType[];

}