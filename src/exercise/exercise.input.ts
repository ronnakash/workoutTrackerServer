import { Field, InputType } from "@nestjs/graphql";
import { Exercise, ExerciseBase, WeightedMuscle } from "./exercise.interfaces";
import { ModelInput } from "../models/models.input";

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