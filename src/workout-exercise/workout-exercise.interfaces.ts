import { Workout, WorkoutBase, WorkoutInput } from "../workout/workout.interfaces";
import { Exercise, ExerciseBase, ExerciseInput } from "../exercise/exercise.interfaces";
import { ModelBase, ModelInput } from "../models/models.interfaces";
import { WorkoutExerciseSet, WorkoutExerciseSetInput } from "../workout_exercise_set/workout-exercise-set.interfaces";
import { Field, InputType } from "@nestjs/graphql";

export interface WorkoutExerciseBase {
    exercise: ExerciseBase;
    workout: WorkoutBase;
    sets: WorkoutExerciseSet[];
}

export interface WorkoutExercise extends WorkoutExerciseBase, ModelBase {
    exercise: Exercise;
    workout: Workout;
    sets: WorkoutExerciseSet[];
}

@InputType()
export class WorkoutExerciseInput implements WorkoutExerciseBase, ModelInput<WorkoutExercise>{
    @Field()
    exercise: ExerciseInput;
    
    @Field(type => [WorkoutInput])
    workout: WorkoutInput;
    
    @Field(type => [WorkoutExerciseSetInput])
    sets: WorkoutExerciseSetInput[];

}