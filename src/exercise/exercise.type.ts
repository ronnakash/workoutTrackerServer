import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Exercise, Muscle, WeightedMuscle } from "./exercise.interfaces";
import { ExerciseEntity } from "./exercise.entity";
import { ModelType, ModelTypeWithId } from "../models/models.type";

@ObjectType('Excercise')
export class ExerciseType extends ModelTypeWithId<Exercise> {

    constructor(excerciseEntity : ExerciseEntity);
    constructor(excercise : Exercise);


    constructor(exercise : Exercise | ExerciseEntity) {
        super();
        this._id = exercise._id;
        this.name = exercise.name;
        // this.musclesWorked = e.musclesWorked;
        this.workload = exercise.workload;    
    }

    @Field(type => ID, {nullable: true})
    _id: string;

    @Field({nullable: true})
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