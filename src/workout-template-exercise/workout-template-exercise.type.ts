import { ObjectType, Field, ID } from "@nestjs/graphql";
import { ModelType } from "../models/models.type";
import { ExerciseType } from "../exercise/exercise.type";
import { WorkoutTemplateExercise, WorkoutTemplateExerciseSetBase } from "./workout-template-exercise.interfaces";
import { WorkoutTemplateExerciseEntity } from "./workout-template-exercise.entity";
import { deepPrint } from "../util/deepPrint";

@ObjectType('WorkoutTemplateExercise')
export class WorkoutTemplateExerciseType extends ModelType<WorkoutTemplateExercise> {
    
    constructor(workoutExerciseEntity: WorkoutTemplateExerciseEntity);
    constructor(workoutExercise: WorkoutTemplateExercise);
    

    constructor(workoutExercise: WorkoutTemplateExerciseEntity | WorkoutTemplateExercise) {
        super();
        console.log("WorkoutTemplateExerciseType ");
        deepPrint(workoutExercise);        
        this.exercise = new ExerciseType(workoutExercise.exercise);
        this.sets = workoutExercise.sets;    
    }

    @Field(type => ExerciseType, {nullable: true})
    exercise: ExerciseType;

    @Field(type => [WorkoutTemplateExerciseSet], {nullable: true})
    sets:  WorkoutTemplateExerciseSet[]

}

@ObjectType()
export class WorkoutTemplateExerciseSet 
    implements WorkoutTemplateExerciseSetBase{

    constructor(reps: number, rpe: number, weight: number) {
        this.reps = reps;
        this.rpe = rpe;
        this.weight = weight;
    }
    
    @Field(type => Number, {nullable: true})
    reps: number;

    @Field(type => Number, {nullable: true})
    rpe: number;

    @Field(type => Number, {nullable: true})
    weight: number;
}
