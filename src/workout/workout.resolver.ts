import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
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
import { WorkoutInput } from './workout.input';

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
        // return (await this.getAll()).map(e => e.toType());
        const entities = await this.service.getWithRelations({}, ['exercises', 'exercises.sets', 'exercises.exercise']);
        const res = entities.map(e => e.toType());
        return res;
    }
    
    @ResolveField()
    async exercises(@Parent() workout: WorkoutType) {
        const w = (workout as unknown) as Workout;
        return await this.workoutExerciseService.getAllBy({workout: w})
    }

    @Mutation(() => WorkoutType)
    async createWorkout(
      @Args('workout') workout: WorkoutInput,
    ): Promise<WorkoutType> {
        return (await super.create(workout)).toType() as WorkoutType;
    }

    @Mutation(() => WorkoutType)
    async updateWorkout(
      @Args('workout') workout: WorkoutInput,
    ): Promise<WorkoutType> {
        return (await super.create(workout)).toType() as WorkoutType;
    }
}
