import { Field, ID, InputType } from "@nestjs/graphql";
import { ModelInput } from "../models/models.input";
import { Workout, WorkoutBase } from "./workout.interfaces";
import { WorkoutExerciseInput } from "../workout-exercise/workout-exercise.input";


@InputType()
export class WorkoutInput implements WorkoutBase, ModelInput<Workout>{
    
    @Field()
    _id: string;
    
    @Field(type => ID)
    authorId: string;
    
    @Field()
    title: string;
    
    @Field(type => [WorkoutExerciseInput])
    exercises: WorkoutExerciseInput[];

}