import { Workout, WorkoutBase } from "../workout/workout.interfaces";
import { Exercise, ExerciseBase } from "../exercise/exercise.interfaces";
import { ModelBase } from "../models/models.interfaces";
import { WorkoutExerciseSet } from "../workout_exercise_set/workout-exercise-set.interfaces";

export interface WorkoutExerciseBase {
    exercise?: ExerciseBase;
    workout?: WorkoutBase;
    sets?: WorkoutExerciseSet[];
}

export interface WorkoutExercise extends WorkoutExerciseBase, ModelBase {
    exercise: Exercise;
    workout: Workout;
    sets: WorkoutExerciseSet[];
}

