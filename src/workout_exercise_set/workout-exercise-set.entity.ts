import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { WorkoutExerciseEntity } from "../workout-exercise/workout-exercise.entity";

@Entity('workout_exercise_set', { name: 'postgres' })
export class WorkoutExerciseSetEntity {

    @ManyToOne(() => WorkoutExerciseEntity, workoutExercise => workoutExercise.sets)
    @JoinColumn({ name: "workout_exercise_id", referencedColumnName: "_id" })
    workoutExercise: WorkoutExerciseEntity;

    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column()
    setNumber: number

    @Column()
    reps: number;

    @Column()
    rpe: number;

  
}
