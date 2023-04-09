import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { WorkoutExerciseType } from './workout-exercise.type';
import { ModelsResolver } from '../models/models.resolver';
import { WorkoutExercise } from './workout-exercise.interfaces';
import { WorkoutExerciseService } from './workout-exercise.service';
import { WorkoutType } from '../workout/workout.type';
import { WorkoutExerciseEntity } from './workout-exercise.entity';
import { ExerciseService } from '../exercise/exercise.service';
import { ExerciseType } from 'src/exercise/exercise.type';
import { WorkoutExerciseInput } from './workout-exercise.input';

@Resolver()
export class WorkoutExerciseResolver extends ModelsResolver<WorkoutExercise, WorkoutExerciseEntity> {
    
    public constructor(
        private workoutExerciseService : WorkoutExerciseService,
        private exerciseService : ExerciseService
        ) {
            super(workoutExerciseService)
    }
    @Query( returns => [WorkoutExerciseType] )
    WorkoutExcercises() {
        return this.getAll();
    }

    @Mutation(() => WorkoutExerciseType)
    async createWorkoutExercise(
      @Args('workoutExercise') workoutExercise: WorkoutExerciseInput,
    ): Promise<WorkoutExerciseType> {
        return (await super.create(workoutExercise)).toType() as WorkoutExerciseType;
    }

    // @ResolveField(() => ExerciseType)
    // async exercises(@Parent() workoutExercise: WorkoutExerciseType) {
    //     const w = (workoutExercise as unknown) as WorkoutExercise;
    //     return await this.exerciseService.getAllBy({exercise: w.exercise})
    // }

}
