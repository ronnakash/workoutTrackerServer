import { Field, InputType } from "@nestjs/graphql";
import { WorkoutExerciseSet } from "./workout-exercise-set.interfaces";
import { ModelInput } from "src/models/models.input";

@InputType()
export class WorkoutExerciseSetInput implements WorkoutExerciseSet, ModelInput<WorkoutExerciseSet>{
    
    @Field({nullable: true})
    setNumber: number;
    
    @Field({nullable: true})
    reps: number;
    
    @Field({nullable: true})
    rpe: number;
    
    @Field({nullable: true})
    weight: number;

}