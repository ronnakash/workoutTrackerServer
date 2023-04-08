import { ObjectType, Field, ID } from "@nestjs/graphql";
import { ModelType } from "../models/models.type";
import { WorkoutExercise } from "./workout-exercise.interfaces";
import { ExerciseType } from "../exercise/exercise.type";
import { WorkoutExerciseEntity } from "./workout-exercise.entity";
import { WorkoutExerciseSetType } from "../workout_exercise_set/workout-exercise-set.type";
import { WorkoutExerciseSet } from "../workout_exercise_set/workout-exercise-set.interfaces";
import { WorkoutExerciseSetEntity } from "../workout_exercise_set/workout-exercise-set.entity";
import { WorkoutType } from "../workout/workout.type";

@ObjectType('WorkoutExcercise')
export class WorkoutExerciseType extends ModelType<WorkoutExercise> implements WorkoutExercise {
    
    constructor(workoutExerciseEntity: WorkoutExerciseEntity);
    constructor(workoutExercise: WorkoutExercise);
    

    constructor(workoutExercise: WorkoutExerciseEntity | WorkoutExercise) {
        super();
        this.exercise = new ExerciseType(workoutExercise.exercise);
        this.sets = workoutExercise.sets.map((e : WorkoutExerciseSetEntity | WorkoutExerciseSet) => new WorkoutExerciseSetType(e));    

    }

    @Field(type => ExerciseType, {nullable: true})
    exercise: ExerciseType;

    @Field(type => [WorkoutExerciseSetType], {nullable: true})
    sets:  WorkoutExerciseSetType[]

    @Field(type => [WorkoutType], {nullable: true})
    workout: WorkoutType;
}