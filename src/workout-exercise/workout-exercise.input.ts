import { Field, InputType } from "@nestjs/graphql";
import { ExerciseInput } from "../exercise/exercise.input";
import { ModelInput } from "../models/models.input";
import { WorkoutInput } from "../workout/workout.input";
import { WorkoutExercise, WorkoutExerciseBase } from "./workout-exercise.interfaces";
import { WorkoutExerciseSetInput } from "../workout_exercise_set/workout-exercise-set.input";

@InputType('workoutExerciseInput')
export class WorkoutExerciseInput implements WorkoutExerciseBase, ModelInput<WorkoutExercise>{
    @Field({nullable: true})
    exercise?: ExerciseInput;
    
    @Field(type => [WorkoutInput], {nullable: true})
    workout?: WorkoutInput;
    
    @Field(type => [WorkoutExerciseSetInput], {nullable: true})
    sets?: WorkoutExerciseSetInput[];

}