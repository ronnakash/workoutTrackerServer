import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToMany, OneToMany, JoinTable } from "typeorm";
import { Workout } from "./workout.interfaces";
import { WorkoutExercise } from "../workout-exercise/workout-exercise.interfaces";
import { ModelEntity } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { WorkoutType } from "./workout.type";
import { WorkoutExerciseEntity } from "../workout-exercise/workout-exercise.entity";
import { ExerciseEntity } from "../exercise/exercise.entity";

@Entity('workout', { name: 'postgres' })
export class WorkoutEntity extends ModelEntity<Workout> {

    public constructor(model? : Workout) {
        super();
        if(model){
            this._id = model._id;
            this.exercises = model.exercises.map(e => new WorkoutExerciseEntity(e));
        }
    }

    @OneToMany(() => WorkoutExerciseEntity, workoutExercise => workoutExercise.workout)
    exercises: WorkoutExerciseEntity[];

    @ManyToMany(() => ExerciseEntity, exercise => exercise.workouts)
    @JoinTable({
      name: 'workout_exercise',
      joinColumn: {
        name: 'workout_id',
        referencedColumnName: '_id'
      },
      inverseJoinColumn: {
        name: 'exercise_id',
        referencedColumnName: '_id'
      }
    })
    exercisesList: ExerciseEntity[];
  

    @Column()
    title: string;

    toType(): ModelType<Workout> {
        return new WorkoutType(this);
    }

}
