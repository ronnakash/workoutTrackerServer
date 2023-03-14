import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { WorkoutExerciseEntity } from "../workout-exercise/workout-exercise.entity";
import { WorkoutExerciseSet } from "./workout-exercise-set.interfaces";
// import 'reflect-metadata'

@Entity('workout_exercise_set', { name: 'postgres' })
export class WorkoutExerciseSetEntity {

    constructor(wes : WorkoutExerciseSet){
        
    }

    // @JoinColumn({ name: "workoutExercise", referencedColumnName: "_id" })
    @ManyToOne(() => WorkoutExerciseEntity, workoutExercise => workoutExercise.sets)
    @PrimaryColumn('uuid')
    workoutExercise: WorkoutExerciseEntity;

    // @PrimaryGeneratedColumn('uuid')
    // _id: string;

    @PrimaryColumn()
    setNumber: number

    @Column()
    reps: number;

    @Column()
    rpe: number;

  
}
