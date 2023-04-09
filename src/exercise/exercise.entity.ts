import { Entity, Column, ObjectIdColumn, ManyToMany, OneToMany } from "typeorm";
import { Exercise, WeightedMuscle } from "./exercise.interfaces";
import { ModelEntity, ModelEntityWithId } from "../models/models.entity";
import { ModelType, ModelTypeWithId } from "../models/models.type";
import { ExerciseType } from "./exercise.type";
import { isNullableType } from "graphql";
import { WorkoutEntity } from "../workout/workout.entity";
import { WorkoutExerciseEntity } from "../workout-exercise/workout-exercise.entity";

@Entity('exercise', { name: 'postgres' })
export class ExerciseEntity extends ModelEntityWithId<Exercise> implements Exercise {
    

    public constructor(model? : Partial<Exercise>) {
        super();
        if (model){
            this.name = model.name;
            this.workload = model.workload;
            this.musclesWorked = model.musclesWorked;
        }
    }
    
    // @ObjectIdColumn()
    // _id: string;

    @Column()
    name: string;

    @Column()
    workload: number;

    // @ManyToMany(() => WorkoutEntity, workout => workout.exercises)
    // workouts: WorkoutEntity[];  

    @Column({ type: 'json', array: false, nullable: true })
    musclesWorked: WeightedMuscle[];

    @OneToMany(() => WorkoutExerciseEntity, workoutExercise => workoutExercise.workout, 
            { onUpdate: 'CASCADE', cascade: ["insert", "update", "soft-remove"], onDelete: 'CASCADE'} )
    exercises: WorkoutExerciseEntity[];


    toType(): ModelTypeWithId<Exercise> {
        return new ExerciseType(this);
    }

}
