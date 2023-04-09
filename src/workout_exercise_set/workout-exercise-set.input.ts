import { Field, InputType } from "@nestjs/graphql";
import { WorkoutExerciseSet, WorkoutExerciseSetBase } from "./workout-exercise-set.interfaces";
import { ModelInput } from "../models/models.input";

@InputType('workoutExerciseSetInput')
export class WorkoutExerciseSetInput implements WorkoutExerciseSetBase, ModelInput<WorkoutExerciseSet>{
    
    @Field({nullable: true})
    setNumber?: number;
    
    @Field({nullable: true})
    reps?: number;
    
    @Field({nullable: true})
    rpe?: number;
    
    @Field({nullable: true})
    weight?: number;

}