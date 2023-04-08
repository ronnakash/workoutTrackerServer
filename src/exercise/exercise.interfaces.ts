import { Field, InputType, Int } from "@nestjs/graphql";
import { ModelBase, ModelBaseWithId, ModelInput } from "../models/models.interfaces";

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


@InputType()
export class ExerciseInput implements ExerciseBase, ModelInput<Exercise>{

    @Field(() => [WeightedMuscleInput])
    musclesWorked: WeightedMuscleInput[];
    
    @Field()
    workload: number;

    @Field()
    name: string;
}


@InputType()
export class WeightedMuscleInput implements WeightedMuscle{
    
    @Field()
    workload: number;

    @Field()
    muscle: string;
}