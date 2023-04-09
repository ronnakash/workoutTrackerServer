import { ObjectType, Field, ID } from "@nestjs/graphql";
import { ModelType } from "../models/models.type";
import { ExerciseType } from "../exercise/exercise.type";
import { WorkoutTemplateExercise } from "./workout-template-exercise.interfaces";
import { WorkoutTemplateExerciseEntity } from "./workout-template-exercise.entity";
import { WorkoutTemplateExerciseSet } from "./workout-template-exercise.input";

@ObjectType('WorkoutTemplateExercise')
export class WorkoutTemplateExerciseType extends ModelType<WorkoutTemplateExercise> {
    
    constructor(workoutExerciseEntity: WorkoutTemplateExerciseEntity);
    constructor(workoutExercise: WorkoutTemplateExercise);
    

    constructor(workoutExercise: WorkoutTemplateExerciseEntity | WorkoutTemplateExercise) {
        super();
        this.exercise = new ExerciseType(workoutExercise.exercise);
        this.sets = workoutExercise.sets;    
    }

    @Field(type => ExerciseType, {nullable: true})
    exercise: ExerciseType;

    @Field(type => [WorkoutTemplateExerciseSet], {nullable: true})
    sets:  WorkoutTemplateExerciseSet[]

}