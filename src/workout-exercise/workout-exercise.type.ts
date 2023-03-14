import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Exercise } from "../exercise/exercise.interfaces";
import { ModelType } from "../models/models.type";
import { WorkoutExercise } from "./workout-exercise.interfaces";
import { ExerciseType } from "../exercise/exercise.type";
import { WorkoutExerciseEntity } from "./workout-exercise.entity";
import { ExerciseEntity } from "../exercise/exercise.entity";

@ObjectType('WorkoutExcercise')
export class WorkoutExerciseType extends ModelType<WorkoutExercise> {
    
    // constructor(workoutExerciseEntity: WorkoutExerciseEntity);
    // constructor(workoutExercise: WorkoutExercise);
    

    constructor(workoutExercise: WorkoutExerciseEntity | WorkoutExercise) {
        super();
        // this._id = workoutExercise._id;
        this.exercise = new ExerciseType(workoutExercise.exercise);
        // this.reps = workoutExercise.reps;
        // this.sets = workoutExerciseEntityOrExercise.sets;    

    }

    // @Field(type => ID)
    // _id: string;

    @Field(type => ExerciseType, {nullable: true})
    exercise: ExerciseType;

    @Field(type => Number, {nullable: true})
    reps: number;

    @Field(type => [WorkoutExerciseType], {nullable: true})
    excercises: WorkoutExerciseType[];
}