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
export class WorkoutExerciseEntity extends ModelEntity<WorkoutExercise>{

    public constructor(model? : WorkoutExercise) {
        super();
        if (model) {
            this.exercise = new ExerciseEntity(model.exercise);
            this.workout = new WorkoutEntity(model.workout);
            // this.reps = model.reps;
            // this.sets = model.sets;
        }
    }

    // @ManyToOne(() => WorkoutEntity, workout => workout.exercises)
    // workout: WorkoutEntity;


    // @JoinColumn({name: 'exercise', referencedColumnName: 'exercise'})
    // exercise: ExerciseEntity;

    @ManyToOne(() => WorkoutEntity, workout => workout.exercises)
    @JoinColumn({ name: 'workout' })
    @PrimaryColumn('uuid')
    workout: WorkoutEntity;
  
    @ManyToOne(() => ExerciseEntity, exercise => exercise.exercises,)
    @JoinColumn({ name: 'exercise' })
    @PrimaryColumn('uuid')
    exercise: ExerciseEntity;

    // @Column()
    // reps: number;

    @OneToMany(() => WorkoutExerciseSetEntity, set => set.workoutExercise)
    sets: WorkoutExerciseSetEntity[];

    toType(): ModelType<WorkoutExercise> {
        return new WorkoutExerciseType(this);
    }

}
