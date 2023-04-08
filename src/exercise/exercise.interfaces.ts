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

export interface Exercise extends ModelBaseWithId {
    name: string;
    musclesWorked: WeightedMuscle[];
    workload: number;
}

@InputType()
export class ExerciseInput implements Exercise{
    @Field()
    _id: string;

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