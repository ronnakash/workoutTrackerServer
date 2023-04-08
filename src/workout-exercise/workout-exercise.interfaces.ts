import { Workout } from "../workout/workout.interfaces";
import { Exercise, ExerciseBase, ExerciseInput } from "../exercise/exercise.interfaces";
import { ModelBase, ModelInput } from "../models/models.interfaces";
import { WorkoutExerciseSet } from "../workout_exercise_set/workout-exercise-set.interfaces";
import { Field, InputType } from "@nestjs/graphql";

export interface WorkoutExerciseBase {
    exercise: ExerciseBase;
    workout: Workout;
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
    
    @Field()
    workout: Workout;
    
    @Field()
    sets: WorkoutExerciseSet[];

}