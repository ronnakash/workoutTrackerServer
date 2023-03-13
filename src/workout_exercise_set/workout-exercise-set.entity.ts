import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { WorkoutExerciseEntity } from "../workout-exercise/workout-exercise.entity";

@Entity('workout_exercise_set', { name: 'postgres' })
export class WorkoutExerciseSetEntity {

    @ManyToOne(() => WorkoutExerciseEntity, workoutExercise => workoutExercise.sets)
    @JoinColumn({ name: "workoutExerciseId", referencedColumnName: "_id" })
    workoutExercise: WorkoutExerciseEntity;

    @PrimaryColumn()
    workoutExerciseId: number;


    @PrimaryColumn()
    setNumber: number

    @Column()
    reps: number;

    @Column()
    rpe: number;

  
}
