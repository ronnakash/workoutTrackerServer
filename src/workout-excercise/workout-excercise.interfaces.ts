import { Excercise } from "src/excercises/excercises.interfaces";
import { ModelBase } from "src/models/models.interfaces";

export interface WorkoutExcercise extends ModelBase {
    excercise: Excercise;
    reps: number;
    sets: number;
}
