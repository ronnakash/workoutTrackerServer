import { Context, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { WorkoutType } from './workout.type';
import { WorkoutExerciseType } from '../workout-exercise/workout-exercise.type';
import { ModelsResolver, ModelsResolverWithId } from '../models/models.resolver';
import { Workout } from './workout.interfaces';
import { WorkoutService } from './workout.service';
import { ExerciseType } from '../exercise/exercise.type';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { WorkoutEntity } from './workout.entity';
import { v4 as uuidv4 } from 'uuid';
import { WorkoutExerciseService } from '../workout-exercise/workout-exercise.service';
import { ExistsJWTInterceptor, GetJWTInterceptor, ValidateAdminTokenInterceptor, ValidateUserOrAdminInterceptor } from '../interceptors/interceptor.functions';
import { User } from 'src/user/user.interfaces';

@Resolver(of => WorkoutType)
// @UseInterceptors(GetJWTInterceptor, ExistsJWTInterceptor, ValidateUserOrAdminInterceptor)
export class WorkoutResolver extends ModelsResolverWithId<Workout, WorkoutEntity> {

    public constructor(
        private workoutService : WorkoutService,
        private workoutExerciseService : WorkoutExerciseService
        ) {
            super(workoutService)
    }

    @Query( returns => [WorkoutType] )
    // @UseInterceptors(GetJWTInterceptor, ExistsJWTInterceptor, ValidateUserOrAdminInterceptor)
    async Workouts(@Context() context: any) {
        return (await this.getAll()).map(e => e.toType());
    }
    
    @ResolveField()
    async exercises(@Parent() workout: WorkoutType) {
        const w = (workout as unknown) as Workout;
        // const res =  await this.workoutExerciseService.getAllBy({workout: w})
        // console.log("workout:\n");
        // console.log(workout);
        // console.log("res:\n");
        // console.log(res);
        // const res : WorkoutExerciseType[] = [];  
        // console.log(workout);
        // return res;
        return await this.workoutExerciseService.getAllBy({workout: w})
    }

}
