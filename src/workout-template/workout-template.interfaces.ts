import { User, UserBase, UserInput } from "../user/user.interfaces";
import { ModelBase, ModelBaseWithId, ModelInput } from "../models/models.interfaces";
import { WorkoutTemplateExercise, WorkoutTemplateExerciseBase, WorkoutTemplateExerciseInput, WorkoutTemplateExerciseSetInput } from "../workout-template-exercise/workout-template-exercise.interfaces";
import { Field, InputType } from "@nestjs/graphql";


export interface WorkoutTemplateBase {
    exercises: WorkoutTemplateExerciseBase[];
    title: string;
    author : UserBase;
}

export interface WorkoutTemplate extends WorkoutTemplateBase, ModelBaseWithId {
    //Date
    exercises: WorkoutTemplateExercise[];
    title: string;
    author : User;
}

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