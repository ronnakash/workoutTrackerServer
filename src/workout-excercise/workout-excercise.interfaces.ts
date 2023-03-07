import { Excercise } from "../excercise/excercise.interfaces";
import { ModelBase } from "../models/models.interfaces";

export interface WorkoutExcercise extends ModelBase {
    excercise: Excercise;
    reps: number;
    sets: number;
}
