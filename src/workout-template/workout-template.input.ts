import { Field, InputType } from "@nestjs/graphql";
import { ModelInput } from "../models/models.input";
import { WorkoutTemplate, WorkoutTemplateBase } from "./workout-template.interfaces";
import { UserInput } from "../user/user.interfaces";
import { WorkoutTemplateExerciseInput } from "../workout-template-exercise/workout-template-exercise.input";


@InputType()
export class WorkoutTemplateInput 
        implements WorkoutTemplateBase, ModelInput<WorkoutTemplate>{
    
    @Field(type => [WorkoutTemplateExerciseInput])
    exercises: WorkoutTemplateExerciseInput[];
    
    @Field()
    title: string;
    
    @Field(type => [UserInput], {nullable: true})
    author: UserInput;
    
    @Field()
    _id: string;

}