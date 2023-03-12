import { ObjectType, Field, ID } from "@nestjs/graphql";
import { ModelType } from "../models/models.type";
import { Workout } from "./workout.interfaces";
import { WorkoutExerciseType } from "../workout-exercise/workout-exercise.type";
import { WorkoutEntity } from "./workout.entity";
import { WorkoutExerciseEntity } from "../workout-exercise/workout-exercise.entity";

@ObjectType('Workout')
export class WorkoutType extends ModelType<Workout> {

    constructor(workoutEntity: WorkoutEntity);
    constructor(workout: Workout);

    constructor(workoutEntity?: WorkoutEntity, workout?: Workout) {
        super();
        if (workoutEntity){
            this._id = workoutEntity._id;
            this.excercises = workoutEntity.exercises?.map((e : WorkoutExerciseEntity) => {
                // console.log(typeof e);
                return new WorkoutExerciseType(e);
            });    
        }
        else if (workout) {
            this._id = workout._id;
            this.excercises = workout.exercises?.map(e => new WorkoutExerciseType(e));    
        }
    }

    @Field(type => ID)
    _id: string;

    @Field(type => [WorkoutExerciseType])
    excercises: WorkoutExerciseType[];

}