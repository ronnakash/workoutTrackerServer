import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { WorkoutExerciseType } from './workout-excercise.type';
import { ModelsResolver } from '../models/models.resolver';
import { WorkoutExercise } from './workout-excercise.interfaces';
import { WorkoutExerciseService } from './workout-excercise.service';
import { WorkoutType } from '../workout/workout.type';

@Resolver()
export class WorkoutExerciseResolver extends ModelsResolver<WorkoutExercise> {
    
    public constructor(
        private workoutExercisesService : WorkoutExerciseService) {
            super(workoutExercisesService)
    }
    @Query( returns => [WorkoutExerciseType] )
    WorkoutExcercises() {
        return this.getAll();
    }


}
