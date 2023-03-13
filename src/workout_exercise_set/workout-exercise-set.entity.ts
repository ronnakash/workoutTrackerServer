import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { WorkoutExerciseEntity } from "../workout-exercise/workout-exercise.entity";
// import 'reflect-metadata'

@Entity('workout_exercise_set', { name: 'postgres' })
export class WorkoutExerciseSetEntity {

    // @JoinColumn({ name: "workout_exercise_id", referencedColumnName: "_id" })
    // @ManyToOne(() => WorkoutExerciseEntity, workoutExercise => workoutExercise.sets)
    // workoutExercise: WorkoutExerciseEntity;

    @PrimaryGeneratedColumn('uuid')
    _id: string;

    // @PrimaryColumn()
    @Column()
    setNumber: number

    @Column()
    reps: number;

    @Column()
    rpe: number;

  
}
