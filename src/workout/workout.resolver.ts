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

@Resolver(of => WorkoutType)
export class WorkoutResolver extends ModelsResolver<Workout> {

    public constructor(
        private excercisesService : WorkoutService,
        ) {
            super(excercisesService)
    }

    @Query( returns => [WorkoutType] )
    @UseGuards(ExistsJWTMiddleware, ValidateUserOrAdminMiddleware)
    async Workouts() {
        return await this.getAll();
    }
    
    // @ResolveField()
    // async workoutExcercises(@Parent() workout: WorkoutType) {
    //     const { _id } = workout;
    //     return await this.workoutExcerciseService.getAllBy({})
    // }

}
