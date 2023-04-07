import { User } from "src/user/user.interfaces";
import { ModelBase, ModelBaseWithId } from "../models/models.interfaces";
import { WorkoutTemplateExercise } from "../workout-template-exercise/workout-template-exercise.interfaces";


export interface WorkoutTemplate extends ModelBaseWithId {
    exercises: WorkoutTemplateExercise[];
    title: string;
    author : User;
    //Date
}
