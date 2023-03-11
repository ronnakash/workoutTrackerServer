import { ModelBase } from "../models/models.interfaces";
import { WorkoutExercise } from "../workout-excercise/workout-excercise.interfaces";

export interface Workout extends ModelBase {
    exercises: WorkoutExercise[];
}
