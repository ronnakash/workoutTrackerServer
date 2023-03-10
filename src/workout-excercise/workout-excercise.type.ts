import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Excercise } from "../excercise/excercise.interfaces";
import { ModelType } from "../models/models.type";
import { WorkoutExcercise } from "./workout-excercise.interfaces";
import { ExcerciseType } from "../excercise/excercise.type";
import { WorkoutExcerciseEntity } from "./workout-excercise.entity";
import { ExcerciseEntity } from "../excercise/excercise.entity";

@ObjectType('WorkoutExcercise')
export class WorkoutExcerciseType extends ModelType<WorkoutExcercise> {
    
    constructor(workoutExcerciseEntity: WorkoutExcerciseEntity) 
    constructor(workoutExcercise?: WorkoutExcercise) 
    

    constructor(workoutExcerciseEntity?: WorkoutExcerciseEntity, workoutExcercise?: WorkoutExcercise) {
        super();
        let w;
        if (workoutExcerciseEntity) 
            w = workoutExcerciseEntity;
        else if (workoutExcercise) 
            w = workoutExcercise;
        this._id = w._id;
        this.excercise = new ExcerciseType(w.excercise);
        this.reps = w.reps;
        this.sets = w.sets;    

    }

    @Field(type => ID)
    _id: string;

    @Field(type => ExcerciseType)
    excercise: ExcerciseType;

    @Field(type => Number)
    reps: number;

    @Field(type => Number)
    sets: number;
}