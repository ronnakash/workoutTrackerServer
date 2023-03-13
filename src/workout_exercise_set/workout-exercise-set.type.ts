import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Exercise } from "../exercise/exercise.interfaces";
import { ModelType } from "../models/models.type";
import { ExerciseType } from "../exercise/exercise.type";
import { WorkoutExerciseSetEntity } from "./workout-exercise-set.entity";
import { ExerciseEntity } from "../exercise/exercise.entity";

@ObjectType('WorkoutExcerciseSet')
export class WorkoutExerciseSetType {
    

    @Field(type => ExerciseType)
    exercise: ExerciseType;

    @Field(type => Number)
    reps: number;

    @Field(type => Number)
    sets: number;
}