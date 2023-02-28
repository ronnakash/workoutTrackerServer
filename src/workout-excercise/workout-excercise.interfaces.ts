import { Excercise } from "src/excercise/excercises.interfaces";
import { ModelBase } from "src/models/models.interfaces";

export interface WorkoutExcercise extends ModelBase {
    excercise: Excercise;
    reps: number;
    sets: number;
}
