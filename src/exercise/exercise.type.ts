import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Exercise, Muscle, WeightedMuscle } from "./exercise.interfaces";
import { ExerciseEntity } from "./exercise.entity";
import { ModelType, ModelTypeWithId } from "../models/models.type";
import { PrimaryGeneratedColumn } from "typeorm";
import { deepPrint } from "../util/deepPrint";

@ObjectType('Exercise')
export class ExerciseType extends ModelTypeWithId<Exercise> {

    constructor(excerciseEntity : ExerciseEntity);
    constructor(excercise : Exercise);


    constructor(exercise : Exercise | ExerciseEntity) {
        super();
        console.log("ExerciseType ");
        deepPrint(exercise);
        this._id = exercise._id;
        this.name = exercise.name;
        this.musclesWorked = exercise.musclesWorked;
        this.workload = exercise.workload;    
    }

    @Field(type=> ID)
    _id: string;

    @Field()
    name: string;

    @Field(type => [WeightedMuscleType], {nullable: true})
    musclesWorked: WeightedMuscleType[];

    @Field({nullable: true})
    workload: number;
}


@ObjectType()
export class WeightedMuscleType {
    @Field(type => String)
    muscle: string;

    @Field(type => Number)
    workload: number;
}