import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { WorkoutType } from './workout.type';
import { WorkoutExerciseType } from '../workout-exercise/workout-exercise.type';
import { ModelsResolver } from '../models/models.resolver';
import { Workout } from './workout.interfaces';
import { WorkoutService } from './workout.service';
import { ExerciseType } from '../exercise/exercise.type';
import { UseGuards } from '@nestjs/common';
import { ExistsJWTMiddleware, ValidateUserOrAdminMiddleware } from '../middleware/middleware.functions';
import { WorkoutEntity } from './workout.entity';
import { v4 as uuidv4 } from 'uuid';
import { WorkoutExerciseService } from '../workout-exercise/workout-exercise.service';

@Resolver(of => WorkoutType)
export class WorkoutResolver extends ModelsResolver<Workout> {

    public constructor(
        private workoutService : WorkoutService,
        private workoutExerciseService : WorkoutExerciseService
        ) {
            super(workoutService)
    }

    @Query( returns => [WorkoutType] )
    @UseGuards(ExistsJWTMiddleware, ValidateUserOrAdminMiddleware)
    async Workouts() {
        return await this.getAll();
    }
    
    @ResolveField()
    async exercises(@Parent() workout: WorkoutType) {
        const { _id } = workout;
        return await this.workoutExerciseService.getAllBy({})
    }

}
