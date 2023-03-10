import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Excercise, Muscle, WeightedMuscle } from "./excercise.interfaces";
import { ExcerciseEntity } from "./excercise.entity";
import { ModelType } from "../models/models.type";

@ObjectType('Excercise')
export class ExcerciseType extends ModelType<Excercise> {

    constructor(excerciseEntity : ExcerciseEntity);
    constructor(excercise : Excercise);


    constructor(excerciseEntity? : ExcerciseEntity, excercise? : Excercise) {
        super();
        let e : Excercise;
        if (excerciseEntity)
            e = excerciseEntity;
        else 
            e = excercise;
        this._id = e._id;
        this.name = e.name;
        this.musclesWorked = e.musclesWorked;
        this.workload = e.workload;    
    }

    @Field(type => ID)
    _id: string;

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