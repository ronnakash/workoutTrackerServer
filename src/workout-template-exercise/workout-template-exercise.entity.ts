import { Entity, Column, ObjectIdColumn, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Exercise } from "../exercise/exercise.interfaces";
import { ModelEntity } from "../models/models.entity";
import { ModelType } from "../models/models.type";
import { WorkoutEntity } from "../workout/workout.entity";
import { ExerciseEntity } from "../exercise/exercise.entity";
import { WorkoutExerciseSetEntity } from "../workout_exercise_set/workout-exercise-set.entity";
import { WorkoutTemplateExercise, WorkoutTemplateExerciseSet, WorkoutTemplateExerciseSetTransformer } from "./workout-template-exercise.interfaces";
import { WorkoutTemplateEntity } from "../workout-template/workout-template.entity";
import { WorkoutTemplateExerciseType } from "./workout-template-exercise.type";

@Entity('workout_template_exercise', { name: 'postgres' })
export class WorkoutTemplateExerciseEntity extends ModelEntity<WorkoutTemplateExercise>{

    public constructor(model? : Partial<WorkoutTemplateExercise>) {
        super();
        if (model) {
            this.exercise = new ExerciseEntity(model.exercise);
            this.workout = new WorkoutTemplateEntity(model.workout);
            this.sets = model.sets;
        }
    }


    @ManyToOne(() => WorkoutTemplateEntity, workoutTemplate => workoutTemplate.exercises)
    @JoinColumn({ name: 'workout' })
    @PrimaryColumn('uuid')
    workout: WorkoutTemplateEntity;
  
    @ManyToOne(() => ExerciseEntity, exercise => exercise.exercises,)
    @JoinColumn({ name: 'exercise' })
    @PrimaryColumn('uuid')
    exercise: ExerciseEntity;

    @Column({type: 'jsonb', transformer: new WorkoutTemplateExerciseSetTransformer()})
    sets: WorkoutTemplateExerciseSet[];

    toType(): ModelType<WorkoutTemplateExercise> {
        return new WorkoutTemplateExerciseType(this);
    }

}

