import { ObjectType, Field, ID } from "@nestjs/graphql";
import { ModelType } from "../models/models.type";
import { Workout } from "./workout.interfaces";
import { WorkoutExcerciseType } from "../workout-excercise/workout-excercise.type";

@ObjectType('Workout')
export class WorkoutType extends ModelType<Workout> {

    @Field(type => ID)
    id: string;

    @Field(type => WorkoutExcerciseType)
    excercises: WorkoutExcerciseType[];

}