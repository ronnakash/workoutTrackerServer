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

// export enum Muscle {
//     Chest = "Chest", 
//     Back = "Chest", 
//     Legs = "Chest", 
//     Biceps = "Chest",
//     Triceps = "Chest", 
//     Forarms = "Chest",
//     Calves = "Chest",
// }

export interface WeightedMuscle {
    muscle: string,
    workload: number,
}

export interface Exercise extends ModelBaseWithId {
    name: string;
    musclesWorked: WeightedMuscle[];
    workload: number;
}


