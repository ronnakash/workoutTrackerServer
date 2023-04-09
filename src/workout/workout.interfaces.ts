import { User } from "../user/user.interfaces";
import { ModelBase, ModelBaseWithId } from "../models/models.interfaces";
import { WorkoutExercise, WorkoutExerciseBase } from "../workout-exercise/workout-exercise.interfaces";

export interface WorkoutBase {
    exercises: WorkoutExerciseBase[];
    title: string;
}

export interface Workout extends ModelBaseWithId {
    exercises: WorkoutExercise[];
    title: string;
    author : User;
}

