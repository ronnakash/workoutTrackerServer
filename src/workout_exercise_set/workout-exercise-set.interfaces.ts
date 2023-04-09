import { Field, InputType } from "@nestjs/graphql";
import { Exercise } from "../exercise/exercise.interfaces";
import { ModelBase } from "../models/models.interfaces";
import { ModelInput } from "../models/models.input";

export interface WorkoutExerciseSetBase {
    setNumber?: number
    reps?: number;
    rpe?: number;
    weight?: number;
}

export interface WorkoutExerciseSet extends WorkoutExerciseSetBase, ModelBase {
    setNumber: number
    reps: number;
    rpe: number;
    weight: number;
}
