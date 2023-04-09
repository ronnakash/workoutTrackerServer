import { Field, ID, InputType } from "@nestjs/graphql";
import { Exercise, ExerciseBase, WeightedMuscle, WeightedMuscleBase } from "./exercise.interfaces";
import { ModelInput, ModelInputWithId } from "../models/models.input";

@InputType()
export class ExerciseInput implements ExerciseBase, ModelInputWithId<Exercise>{

    @Field(() => [WeightedMuscleInput], {nullable: "itemsAndList"})
    musclesWorked?: WeightedMuscleInput[];

    @Field(type=> ID, {nullable: true})
    _id?: string;
    
    @Field({nullable: true})
    workload?: number;

    @Field()
    name: string;
}


@InputType()
export class WeightedMuscleInput implements WeightedMuscleBase{
    
    @Field({nullable: true})
    workload?: number;

    @Field({nullable: true})
    muscle?: string;
}