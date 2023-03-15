import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Exercise } from "../exercise/exercise.interfaces";
import { ModelType } from "../models/models.type";
import { ExerciseType } from "../exercise/exercise.type";
import { WorkoutExerciseSetEntity } from "./workout-exercise-set.entity";
import { ExerciseEntity } from "../exercise/exercise.entity";
import { WorkoutExerciseSet } from "./workout-exercise-set.interfaces";

@ObjectType('WorkoutExcerciseSet')
export class WorkoutExerciseSetType extends ModelType<WorkoutExerciseSet>{
    // constructor(workoutExerciseSetEntity: WorkoutExerciseSetEntity);
    // constructor(workoutExerciseSet: WorkoutExerciseSet);

    constructor(workoutExerciseSet: WorkoutExerciseSetEntity | WorkoutExerciseSet) {
        super();
        this.setNumber = workoutExerciseSet.setNumber;
        this.reps = workoutExerciseSet.reps;
        this.rpe = workoutExerciseSet.rpe;
    }


    @Field(type => ExerciseType)
    exercise: ExerciseType;

    @Field(type => Number)
    reps: number;

    @Field(type => Number)
    setNumber: number;

    @Field(type => Number)
    rpe: number;

}