import { Exercise } from "../exercise/exercise.interfaces";
import { ModelBase } from "../models/models.interfaces";

export interface WorkoutExerciseSet {
    setNumber: number
    reps: number;
    rpe: number;
    weight: number;
}
