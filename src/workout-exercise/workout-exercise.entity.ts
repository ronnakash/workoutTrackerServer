import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { WorkoutExercise } from "./workout-exercise.interfaces";
import { Exercise } from "../exercise/exercise.interfaces";
import { ModelEntity } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { WorkoutExerciseType } from "./workout-exercise.type";
import { WorkoutEntity } from "../workout/workout.entity";
import { ExerciseEntity } from "../exercise/exercise.entity";
import { WorkoutExerciseSetEntity } from "../workout_exercise_set/workout-exercise-set.entity";

@Entity('workout_exercise', { name: 'postgres' })
export class WorkoutExerciseEntity /*extends ModelEntity<WorkoutExercise>*/ {

    public constructor(model? : WorkoutExercise) {
        // super();
        if (model) {
            this.exercise = new ExerciseEntity(model.exercise);
            this.reps = model.reps;
            // this.sets = model.sets;
        }
    }

    // @ManyToOne(() => WorkoutEntity, workout => workout.exercises)
    // workout: WorkoutEntity;


    // @JoinColumn({name: 'exercise', referencedColumnName: 'exercise'})
    // exercise: ExerciseEntity;

    @ManyToOne(() => WorkoutEntity, workout => workout.exercises)
    @JoinColumn({ name: 'workout_id' })
    workout: WorkoutEntity;
  
    @ManyToOne(() => ExerciseEntity, exercise => exercise.workouts,)
    @JoinColumn({ name: 'exercise_id' })
    exercise: ExerciseEntity;

    @PrimaryColumn()
    workoutId: string;

    @PrimaryColumn()
    exerciseId: number;


    @Column()
    reps: number;

    // @OneToMany(() => WorkoutExerciseSetEntity, set => set.workoutExercise)
    // sets: WorkoutExerciseSetEntity[];

    toType(): ModelType<WorkoutExercise> {
        return new WorkoutExerciseType(this);
    }

}
