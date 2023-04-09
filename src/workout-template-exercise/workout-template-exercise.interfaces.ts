import { Exercise, ExerciseBase, ExerciseInput } from "../exercise/exercise.interfaces";
import { WorkoutTemplate, WorkoutTemplateBase, WorkoutTemplateInput } from "../workout-template/workout-template.interfaces";
import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { ModelBase, ModelInput } from "../models/models.interfaces";

export interface WorkoutTemplateExerciseBase  {
    exercise: ExerciseBase;
    workout: WorkoutTemplateBase;
    sets: WorkoutTemplateExerciseSetBase[];
}

export interface WorkoutTemplateExercise extends ModelBase, WorkoutTemplateExerciseBase {
  exercise: Exercise;
  workout: WorkoutTemplate;
  sets: WorkoutTemplateExerciseSet[];
}

@InputType()
export class WorkoutTemplateExerciseInput
    implements WorkoutTemplateExerciseBase, ModelInput<WorkoutTemplateExercise>{


    @Field(type => ExerciseInput, {nullable: true})
    exercise: ExerciseInput;

    @Field(type => WorkoutTemplateInput, {nullable: true})
    workout: WorkoutTemplateInput;

    @Field(type => [WorkoutTemplateExerciseSetInput], {nullable: true})
    sets: WorkoutTemplateExerciseSetInput[];
    
}

export interface WorkoutTemplateExerciseSetBase  {
  reps: number;
  rpe: number;
  weight: number;
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

export class WorkoutTemplateExerciseSetTransformer {

    to(value: WorkoutTemplateExerciseSet[]): string {
        return JSON.stringify(value);
    }
  
    from(value: string): WorkoutTemplateExerciseSet[] {
        return JSON.parse(value).map(
            ({ reps, rpe, weight }) => 
            new WorkoutTemplateExerciseSet(reps, rpe, weight)
        );
    }
}

@InputType()
export class WorkoutTemplateExerciseSetInput 
    implements WorkoutTemplateExerciseSetBase, 
    ModelInput<WorkoutTemplateExerciseSetBase>{

      @Field(type => Number, {nullable: true})
      reps: number;
  
      @Field(type => Number, {nullable: true})
      rpe: number;
  
      @Field(type => Number, {nullable: true})
      weight: number;
  
}

export class WorkoutTemplateExerciseSetInputTransformer {

  to(value: WorkoutTemplateExerciseSetInput[]): string {
      return JSON.stringify(value);
  }

  from(value: string): WorkoutTemplateExerciseSetInput[] {
      return JSON.parse(value).map(
          ({ reps, rpe, weight }) => 
          new WorkoutTemplateExerciseSet(reps, rpe, weight)
      );
  }
}