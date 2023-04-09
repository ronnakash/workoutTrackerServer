import { Exercise, ExerciseBase } from "../exercise/exercise.interfaces";
import { WorkoutTemplate, WorkoutTemplateBase } from "../workout-template/workout-template.interfaces";
import { ModelBase } from "../models/models.interfaces";
import { WorkoutTemplateExerciseSet } from "./workout-template-exercise.input";

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



export interface WorkoutTemplateExerciseSetBase  {
  reps: number;
  rpe: number;
  weight: number;
}


