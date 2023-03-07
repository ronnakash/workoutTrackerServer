import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Excercise } from "../excercise/excercise.interfaces";
import { ModelType } from "../models/models.type";
import { WorkoutExcercise } from "./workout-excercise.interfaces";
import { ExcerciseType } from "../excercise/excercise.type";
import { WorkoutExcerciseEntity } from "./workout-excercise.entity";
import { ExcerciseEntity } from "../excercise/excercise.entity";

@ObjectType('WorkoutExcercise')
export class WorkoutExcerciseType extends ModelType<WorkoutExcercise> {

    constructor(workoutExcerciseEntity: WorkoutExcerciseEntity) {
        super();
        this.id = workoutExcerciseEntity._id;
        this.excercise = new ExcerciseType(new ExcerciseEntity(workoutExcerciseEntity.excercise));
    }

    @Field(type => ID)
    id: string;

    @Field(type => ExcerciseType)
    excercise: ExcerciseType;

    @Field()
    reps: number;

    @Field()
    sets: number;
}