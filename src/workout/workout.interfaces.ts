import { ModelBase } from "src/models/models.interfaces";
import { WorkoutExcercise } from "src/workout-excercise/workout-excercise.interfaces";

export interface Workout extends ModelBase {
    excercises: WorkoutExcercise[];
}
