import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { WorkoutExercise } from "./workout-exercise.interfaces";
import { Exercise } from "../exercise/exercise.interfaces";
import { ModelEntity } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { WorkoutExerciseType } from "./workout-exercise.type";
import { WorkoutEntity } from "../workout/workout.entity";
import { ExerciseEntity } from "../exercise/exercise.entity";
import { WorkoutExerciseSetEntity } from "../workout_exercise_set/workout-exercise-set.entity";
import { deepPrint } from "../util/deepPrint";
import { WorkoutExerciseSet } from "src/workout_exercise_set/workout-exercise-set.interfaces";

@Entity('workout_exercise', { name: 'postgres' })
export class WorkoutExerciseEntity extends ModelEntity<WorkoutExercise>{

    public constructor(model? : Partial<WorkoutExercise>) {
        super();
        if (model) {
            console.log("WorkoutExerciseEntity ");
            // deepPrint(model);
            this.exercise = new ExerciseEntity(model.exercise);
            this.sets = model.sets.map((e : WorkoutExerciseSet) => new WorkoutExerciseSetEntity(e));
            // this.workout = new WorkoutEntity(model.workout);
        }
    }

    @ManyToOne(() => WorkoutEntity, workout => workout.exercises,
            { onUpdate: 'CASCADE', cascade: [/*"insert"*/, "update", "soft-remove"], onDelete: 'CASCADE'})
    @JoinColumn({ name: 'workout' })
    @PrimaryColumn('uuid')
    workout: WorkoutEntity;
  
    @ManyToOne(() => ExerciseEntity, exercise => exercise.exercises,
            { onUpdate: 'CASCADE', cascade: [/*"insert"*/, "update", "soft-remove"], onDelete: 'CASCADE'})
    @JoinColumn({ name: 'exercise' })
    @PrimaryColumn('uuid')
    exercise: ExerciseEntity;


    @OneToMany(() => WorkoutExerciseSetEntity, set => set.workoutExercise,
            { onUpdate: 'CASCADE', cascade: [/*"insert"*/, "update", "soft-remove"], onDelete: 'CASCADE'})
    sets: WorkoutExerciseSetEntity[];

    toType(): ModelType<WorkoutExercise> {
        return new WorkoutExerciseType(this);
    }

}
