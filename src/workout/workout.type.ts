import { ObjectType, Field, ID } from "@nestjs/graphql";
import { ModelType } from "../models/models.type";
import { Workout } from "./workout.interfaces";
import { WorkoutExerciseType } from "../workout-exercise/workout-exercise.type";
import { WorkoutEntity } from "./workout.entity";
import { WorkoutExerciseEntity } from "../workout-exercise/workout-exercise.entity";
import { WorkoutExercise } from "../workout-exercise/workout-exercise.interfaces";

@ObjectType('Workout')
export class WorkoutType extends ModelType<Workout> {

    constructor(workoutEntity: WorkoutEntity);
    constructor(workout: Workout);

    constructor(workout: Workout | WorkoutEntity) {
        super();
        this._id = workout._id;
        this.excercises = workout.exercises?.map( (e : WorkoutExerciseEntity | WorkoutExercise )=> new WorkoutExerciseType(e));    
    }

    @Field(type => ID)
    _id: string;

    @Field(type => [WorkoutExerciseType])
    excercises: WorkoutExerciseType[];

}