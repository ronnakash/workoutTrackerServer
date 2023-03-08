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
    async Workout() {
        const excercise: ExcerciseType = {
            id: '',
            name: "Bench Press",
            musclesWorked: [
                { muscle: "Chest", workload: 100 },
                { muscle: "Shoulders", workload: 80 },
                { muscle: "Triceps", workload: 60 },],
            workload: 100,
        };

        const WorkoutExcercise: WorkoutExcerciseType = {
            id: '1',
            excercise: excercise,
            reps: 6, 
            sets: 4,
        };
        // res._id = uuidv4(); // set a unique ID for the new workout
        const temp = await this.service.getAll();
        console.log(`got ${temp.length} results`)
        temp.forEach(e => console.log(e))
        let result = temp.map(e => e.toType()) as WorkoutType[]; 
        // result.forEach(e => console.log(e))
        // result.forEach(e => console.log(typeof e._id))
        // // const response = result.map(e => {e._id = e._id.toString(); return e;})
        // result.forEach(e => console.log(e))
        // result.forEach(e => console.log(typeof e._id))
        // return response;
        return result;
    }
}
