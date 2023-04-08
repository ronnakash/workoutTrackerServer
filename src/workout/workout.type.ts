import { ObjectType, Field, ID } from "@nestjs/graphql";
import { ModelType, ModelTypeWithId } from "../models/models.type";
import { Workout } from "./workout.interfaces";
import { WorkoutExerciseType } from "../workout-exercise/workout-exercise.type";
import { WorkoutEntity } from "./workout.entity";
import { WorkoutExerciseEntity } from "../workout-exercise/workout-exercise.entity";
import { WorkoutExercise } from "../workout-exercise/workout-exercise.interfaces";
import { UserType } from "../user/user.type";
import { PrimaryGeneratedColumn } from "typeorm";

@ObjectType('Workout')
export class WorkoutType extends ModelTypeWithId<Workout> implements Workout {

    constructor(workoutEntity: WorkoutEntity);
    constructor(workout: Workout);

    constructor(workout: Workout | WorkoutEntity) {
        super();
        this._id = workout._id;
        this.title = workout.title;
        // workout.exercises.forEach(e => console.log(e));
        this.author = new UserType(workout.author);
        this.exercises = workout.exercises?.map( (e : WorkoutExerciseEntity | WorkoutExercise )=> new WorkoutExerciseType(e));    
    }

    @Field(type=> UserType)
    author : UserType;

    @Field(type=> ID)
    _id: string;

    @Field(type => String)
    title: string;

    @Field(type => [WorkoutExerciseType], {nullable: true})
    exercises: WorkoutExerciseType[];

}