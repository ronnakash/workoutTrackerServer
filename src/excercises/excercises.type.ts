import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Excercise, Muscle, WeightedMuscle } from "./excercises.interfaces";
import { ModelType } from "src/models/models.type";
import { ExcerciseEntity } from "./excercises.entity";

@ObjectType('Excercise')
export class ExcerciseType extends ModelType<Excercise> {
    
    constructor(excerciseEntity: ExcerciseEntity) {
        super();
        this.id = excerciseEntity._id;
        this.name = excerciseEntity.name;
        this.musclesWorked = excerciseEntity.musclesWorked;
        this.workload = excerciseEntity.workload;
    }

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