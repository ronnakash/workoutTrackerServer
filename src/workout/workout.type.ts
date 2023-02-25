import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Excercise } from "src/excercises/excercises.interfaces";
import { ModelType } from "src/models/models.type";
import { WorkoutExcercise } from "src/workout-excercise/workout-excercise.interfaces";
import { ExcerciseType } from "src/excercises/excercises.type";
import { Workout } from "./workout.interfaces";
import { WorkoutExcerciseType } from "src/workout-excercise/workout-excercise.type";

@ObjectType('Workout')
export class WorkoutType extends ModelType<Workout> {

    @Field(type => WorkoutExcerciseType)
    excercises: WorkoutExcerciseType[];

}