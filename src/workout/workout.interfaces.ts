import { User } from "../user/user.interfaces";
import { ModelBase, ModelBaseWithId, ModelInput } from "../models/models.interfaces";
import { WorkoutExercise, WorkoutExerciseBase, WorkoutExerciseInput } from "../workout-exercise/workout-exercise.interfaces";
import { Field, ID, InputType } from "@nestjs/graphql";

export interface WorkoutBase {
    exercises: WorkoutExerciseBase[];
    title: string;
}

export interface Workout extends ModelBaseWithId {
    exercises: WorkoutExercise[];
    title: string;
    author : User;
}

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