import { Exercise } from "../excercise/excercise.interfaces";
import { ModelBase } from "../models/models.interfaces";

export interface WorkoutExercise extends ModelBase {
    exercise: Exercise;
    reps: number;
    sets: number;
}
