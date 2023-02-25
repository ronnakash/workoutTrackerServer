import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Excercise, Muscle, WeightedMuscle } from "./excercises.interfaces";
import { ModelType } from "src/models/models.type";

@ObjectType('Excercise')
export class ExcerciseType extends ModelType<Excercise> {
    
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field(type => [WeightedMuscleType])
    musclesWorked: WeightedMuscleType[];

    @Field()
    workload: number;
}


@ObjectType()
export class WeightedMuscleType {
    @Field(type => String)
    muscle: string;

    @Field(type => Number)
    workload: number;
}