import { Workout } from "../workout/workout.interfaces";
import { Exercise } from "../exercise/exercise.interfaces";
import { ModelBase } from "../models/models.interfaces";
import { WorkoutExerciseSet } from "src/workout_exercise_set/workout-exercise-set.interfaces";

export interface WorkoutExercise extends ModelBase {
    exercise: Exercise;
    workout: Workout;
    sets: WorkoutExerciseSet;
}
