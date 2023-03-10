import { Query, Resolver } from '@nestjs/graphql';
import { WorkoutType } from './workout.type';
import { WorkoutExcerciseType } from '../workout-excercise/workout-excercise.type';
import { ModelsResolver } from '../models/models.resolver';
import { Workout } from './workout.interfaces';
import { WorkoutService } from './workout.service';
import { ExcerciseType } from '../excercise/excercise.type';
import { UseGuards } from '@nestjs/common';
import { ExistsJWTMiddleware, ValidateUserOrAdminMiddleware } from '../middleware/middleware.functions';
import { WorkoutEntity } from './workout.entity';
import { v4 as uuidv4 } from 'uuid';

@Resolver(of => WorkoutType)
export class WorkoutResolver extends ModelsResolver<Workout> {

    public constructor(
        private excercisesService : WorkoutService) {
    super(excercisesService)
}

    @Query( returns => [WorkoutType] )
    @UseGuards(ExistsJWTMiddleware, ValidateUserOrAdminMiddleware)
    async Workouts() {
        console.log("\n\nWorkoutResolver\n\n")
        const entities = await this.service.getAll() as WorkoutEntity[];
        console.log('\n\nworkout entities:\n')
        entities.forEach(e => console.log(e.excercises));
        let result = entities.map(e => e.toType()) as WorkoutType[];
        console.log('\n\nworkout types:\n')
        result.forEach(e => console.log(e.excercises)); 
        return result;
    }
}
