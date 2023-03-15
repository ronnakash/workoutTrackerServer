import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { WorkoutType } from './workout.type';
import { WorkoutExerciseType } from '../workout-exercise/workout-exercise.type';
import { ModelsResolver, ModelsResolverWithId } from '../models/models.resolver';
import { Workout } from './workout.interfaces';
import { WorkoutService } from './workout.service';
import { ExerciseType } from '../exercise/exercise.type';
import { UseGuards } from '@nestjs/common';
import { ExistsJWTMiddleware, ValidateUserOrAdminMiddleware } from '../middleware/middleware.functions';
import { WorkoutEntity } from './workout.entity';
import { v4 as uuidv4 } from 'uuid';
import { WorkoutExerciseService } from '../workout-exercise/workout-exercise.service';

@Resolver(of => WorkoutType)
export class WorkoutResolver extends ModelsResolverWithId<Workout, WorkoutEntity> {

    public constructor(
        private workoutService : WorkoutService,
        private workoutExerciseService : WorkoutExerciseService
        ) {
            super(workoutService)
    }

    @Query( returns => [WorkoutType] )
    @UseGuards(ExistsJWTMiddleware, ValidateUserOrAdminMiddleware)
    async Workouts() {
        // return await this.getAll();
        const entities = await this.service.repository.find({relations: ['exercises', 'exercises.sets', 'exercises.exercise']});
        const res1 = entities.map(e => e.toType());
        const res2 = res1.map(e => e as WorkoutType);
        return res2;
    }
    
    // @ResolveField()
    // async exercises(@Parent() workout: WorkoutType) {
    //     const { _id } = workout;
    //     return await this.workoutExerciseService.getAllBy({})
    // }

}
