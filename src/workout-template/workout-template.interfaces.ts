import { User, UserBase, UserInput } from "../user/user.interfaces";
import { ModelBase, ModelBaseWithId } from "../models/models.interfaces";
import { WorkoutTemplateExercise, WorkoutTemplateExerciseBase } from "../workout-template-exercise/workout-template-exercise.interfaces";
import { Field, InputType } from "@nestjs/graphql";
import { ModelInput } from "src/models/models.input";


export interface WorkoutTemplateBase {
    exercises: WorkoutTemplateExerciseBase[];
    title: string;
    author : UserBase;
}

export interface WorkoutTemplate extends WorkoutTemplateBase, ModelBaseWithId {
    //Date
    exercises: WorkoutTemplateExercise[];
    title: string;
    author : User;
}

