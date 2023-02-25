import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Excercise } from "src/excercises/excercises.interfaces";
import { ModelType } from "src/models/models.type";
import { WorkoutExcercise } from "./workout-excercise.interfaces";
import { ExcerciseType } from "src/excercises/excercises.type";

@ObjectType('WorkoutExcercise')
export class WorkoutExcerciseType extends ModelType<WorkoutExcercise> {

    @Field(type => ID)
    id: string;

    @Field(type => ExcerciseType)
    excercise: ExcerciseType;

    @Field()
    reps: number;

    @Field()
    sets: number;
}