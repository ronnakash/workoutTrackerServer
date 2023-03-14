import { ModelBase, ModelBaseWithId } from "../models/models.interfaces";
import { WorkoutExercise } from "../workout-exercise/workout-exercise.interfaces";

export interface Workout extends ModelBaseWithId {
    exercises: WorkoutExercise[];
}
