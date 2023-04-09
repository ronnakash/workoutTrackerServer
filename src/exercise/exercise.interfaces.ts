import { Field, InputType, Int } from "@nestjs/graphql";
import { ModelBase, ModelBaseWithId } from "../models/models.interfaces";

export enum Muscle {
    Chest, 
    Back, 
    Legs, 
    Biceps,
    Triceps, 
    Forarms,
    Calves,
}

export interface WeightedMuscle {
    muscle: string,
    workload: number,
}

export interface ExerciseBase {
    name?: string;
    musclesWorked?: WeightedMuscle[];
    workload?: number;
}

export interface Exercise extends ExerciseBase, ModelBaseWithId {
    name: string;
    musclesWorked: WeightedMuscle[];
    workload: number;
}


