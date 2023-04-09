import { Field, ID, InputType } from "@nestjs/graphql";
import { ModelInput, ModelInputWithId } from "../models/models.input";
import { Workout, WorkoutBase } from "./workout.interfaces";
import { WorkoutExerciseInput } from "../workout-exercise/workout-exercise.input";


@InputType()
export class WorkoutInput implements WorkoutBase, ModelInputWithId<Workout>{
    
    @Field(type => ID, {nullable: true})
    _id?: string;
    
    @Field(type => ID)
    authorId: string;
    
    @Field({nullable: true})
    title?: string;
    
    @Field(type => [WorkoutExerciseInput], {nullable: "itemsAndList"})
    exercises: WorkoutExerciseInput[];

}