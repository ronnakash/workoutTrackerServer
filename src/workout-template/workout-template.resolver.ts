import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { WorkoutExerciseType } from '../workout-exercise/workout-exercise.type';
import { ModelsResolver, ModelsResolverWithId } from '../models/models.resolver';
import { ExerciseType } from '../exercise/exercise.type';
import { UseGuards, UseInterceptors } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { WorkoutExerciseService } from '../workout-exercise/workout-exercise.service';
import { ExistsJWTInterceptor, GetJWTInterceptor, ValidateAdminTokenInterceptor, ValidateUserOrAdminInterceptor } from '../interceptors/interceptor.functions';
import { WorkoutTemplateType } from './workout-template.type';
import { WorkoutTemplateEntity } from './workout-template.entity';
import { WorkoutTemplate } from './workout-template.interfaces';
import { WorkoutTemplateService } from './workout-template.service';
import { WorkoutTemplateInput } from './workout-template.input';

@Resolver(of => WorkoutTemplateType)
// @UseInterceptors(GetJWTInterceptor, ExistsJWTInterceptor, ValidateUserOrAdminInterceptor)
export class WorkoutTemplateResolver extends ModelsResolverWithId<WorkoutTemplate, WorkoutTemplateEntity> {

    public constructor(
        private workoutTemplateService : WorkoutTemplateService,
        // private workoutExerciseService : WorkoutExerciseService
        ) {
            super(workoutTemplateService)
    }

    @Query( returns => [WorkoutTemplateType] )
    // @UseInterceptors(GetJWTInterceptor, ExistsJWTInterceptor, ValidateUserOrAdminInterceptor)
    async WorkoutTemplates(@Context() context: any) {
        // return await this.getAll();
        const req: Request = context.req;

        const entities = await this.service.getWithRelations({}, ['exercises', 'exercises.sets', 'exercises.exercise']);
        const res1 = entities.map(e => e.toType());
        // const res2 = res1.map(e => e as WorkoutTemplateType);
        return res1;
    }
    
    @Mutation(() => WorkoutTemplateType)
    async createWorkoutTemplate(
      @Args('workout') workout: WorkoutTemplateInput,
    ): Promise<WorkoutTemplateType> {
        return (await super.create(workout)).toType() as WorkoutTemplateType;
    }
}
