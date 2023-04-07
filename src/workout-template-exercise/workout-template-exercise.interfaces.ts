import { Exercise } from "../exercise/exercise.interfaces";
import { ModelBase } from "../models/models.interfaces";
import { WorkoutExerciseSet } from "../workout_exercise_set/workout-exercise-set.interfaces";
import { WorkoutTemplate } from "../workout-template/workout-template.interfaces";
import { Field, ObjectType } from "@nestjs/graphql";

export interface WorkoutTemplateExercise extends ModelBase {
    exercise: Exercise;
    workout: WorkoutTemplate;
    sets: WorkoutTemplateExerciseSet[];
}

@ObjectType()
export class WorkoutTemplateExerciseSet {

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
        ({ reps, rpe, weight }) => new WorkoutTemplateExerciseSet(reps, rpe, weight),
      );
    }
  }
  