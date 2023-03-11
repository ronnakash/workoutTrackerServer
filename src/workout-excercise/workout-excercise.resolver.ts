import { Query, Resolver } from '@nestjs/graphql';
import { WorkoutExcerciseType } from './workout-excercise.type';
import { ModelsResolver } from '../models/models.resolver';
import { WorkoutExcercise } from './workout-excercise.interfaces';
import { WorkoutExcerciseService } from './workout-excercise.service';

@Resolver()
export class WorkoutExcerciseResolver extends ModelsResolver<WorkoutExcercise> {
    
    public constructor(
        private workoutExcercisesService : WorkoutExcerciseService) {
            super(workoutExcercisesService)
    }
    @Query( returns => [WorkoutExcerciseType] )
    WorkoutExcercises() {
        return this.getAll();
    }

}
