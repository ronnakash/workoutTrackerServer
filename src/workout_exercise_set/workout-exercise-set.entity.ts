import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { WorkoutExerciseEntity } from "../workout-exercise/workout-exercise.entity";
import { WorkoutExerciseSet } from "./workout-exercise-set.interfaces";
import { ModelEntity } from "../models/models.entity";
import { ModelType } from "../models/models.type";
// import 'reflect-metadata'

@Entity('workout_exercise_set', { name: 'postgres' })
export class WorkoutExerciseSetEntity extends ModelEntity<WorkoutExerciseSet> {

    constructor(wes : WorkoutExerciseSet){
        super();
    }

    // @JoinColumn({ name: "workoutExercise", referencedColumnName: "_id" })
    @ManyToOne(() => WorkoutExerciseEntity, workoutExercise => workoutExercise.sets, 
            { onUpdate: 'CASCADE', cascade: ["insert", "update", "soft-remove"], onDelete: 'CASCADE'})

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

    @Column()
    weight: number;

    toType(): ModelType<WorkoutExerciseSet> {
        throw new Error("Method not implemented.");
    }

}
