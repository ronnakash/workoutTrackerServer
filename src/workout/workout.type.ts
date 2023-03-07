import { ObjectType, Field, ID } from "@nestjs/graphql";
import { ModelType } from "../models/models.type";
import { Workout } from "./workout.interfaces";
import { WorkoutExcerciseType } from "../workout-excercise/workout-excercise.type";
import { WorkoutEntity } from "./workout.entity";
import { WorkoutExcerciseEntity } from "../workout-excercise/workout-excercise.entity";

@ObjectType('Workout')
export class WorkoutType extends ModelType<Workout> {

    constructor(workoutEntity: WorkoutEntity) {
        super();
        this.id = workoutEntity._id;
        this.excercises = workoutEntity.excercises?.map(e => new WorkoutExcerciseType(new WorkoutExcerciseEntity(e)));
    }

    @Field(type => ID)
    id: string;

    @Field(type => WorkoutExcerciseType)
    excercises: WorkoutExcerciseType[];

}