import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Exercise, Muscle, WeightedMuscle } from "./excercise.interfaces";
import { ExerciseEntity } from "./excercise.entity";
import { ModelType } from "../models/models.type";

@ObjectType('Excercise')
export class ExerciseType extends ModelType<Exercise> {

    constructor(excerciseEntity : ExerciseEntity);
    constructor(excercise : Exercise);


    constructor(exerciseEntity? : ExerciseEntity, exercise? : Exercise) {
        super();
        let e : Exercise;
        if (exerciseEntity)
            e = exerciseEntity;
        else 
            e = exercise;
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