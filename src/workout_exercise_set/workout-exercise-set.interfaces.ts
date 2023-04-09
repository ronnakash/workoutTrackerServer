import { Field, InputType } from "@nestjs/graphql";
import { Exercise } from "../exercise/exercise.interfaces";
import { ModelBase } from "../models/models.interfaces";
import { ModelInput } from "../models/models.input";

export interface WorkoutExerciseSet extends ModelBase {
    setNumber: number
    reps: number;
    rpe: number;
    weight: number;
}

@InputType()
export class WorkoutExerciseSetInput implements WorkoutExerciseSet, ModelInput<WorkoutExerciseSet>{
    
    @Field()
    setNumber: number;
    
    @Field()
    reps: number;
    
    @Field()
    rpe: number;
    
    @Field()
    weight: number;

}