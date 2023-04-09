import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { WorkoutExerciseType } from './workout-exercise.type';
import { ModelsResolver } from '../models/models.resolver';
import { WorkoutExercise, WorkoutExerciseInput } from './workout-exercise.interfaces';
import { WorkoutExerciseService } from './workout-exercise.service';
import { WorkoutType } from '../workout/workout.type';
import { WorkoutExerciseEntity } from './workout-exercise.entity';

@Resolver()
export class WorkoutExerciseResolver extends ModelsResolver<WorkoutExercise, WorkoutExerciseEntity> {
    
    public constructor(
        private workoutExercisesService : WorkoutExerciseService) {
            super(workoutExercisesService)
    }
    @Query( returns => [WorkoutExerciseType] )
    WorkoutExcercises() {
        return this.getAll();
    }

    @Mutation(() => WorkoutExerciseType)
    async createWorkoutExercise(
      @Args('exercise') exercise: WorkoutExerciseInput,
    ): Promise<WorkoutExerciseType> {
        return (await super.create(exercise)).toType() as WorkoutExerciseType;
    }

}
