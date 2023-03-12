import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToOne } from "typeorm";
import { WorkoutExercise } from "./workout-excercise.interfaces";
import { Exercise } from "../exercise/exercise.interfaces";
import { ModelEntity } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { WorkoutExerciseType } from "./workout-excercise.type";
import { WorkoutEntity } from "../workout/workout.entity";
import { ExerciseEntity } from "../exercise/exercise.entity";

@Entity('workout_exercise', { name: 'postgres' })
export class WorkoutExerciseEntity extends ModelEntity<WorkoutExercise> {

    public constructor(model? : WorkoutExercise) {
        super();
        if (model) {
            this.exercise = new ExerciseEntity(model.exercise);
            this.reps = model.reps;
            this.sets = model.sets;
        }
    }

    @ManyToOne(() => WorkoutEntity, workout => workout.exercises)
    workout: WorkoutEntity;

    @JoinColumn({name: 'excercise', referencedColumnName: 'exercise'})
    exercise: ExerciseEntity;

    @Column()
    reps: number;

    @Column()
    sets: number;

    toType(): ModelType<WorkoutExercise> {
        return new WorkoutExerciseType(this);
    }

}
