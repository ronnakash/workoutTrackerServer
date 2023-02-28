import { Query, Resolver } from '@nestjs/graphql';
import { WorkoutType } from './workout.type';
import { WorkoutExcerciseType } from '../workout-excercise/workout-excercise.type';
import { ModelsResolver } from '../models/models.resolver';
import { Workout } from './workout.interfaces';
import { WorkoutService } from './workout.service';
import { ExcerciseType } from '../excercises/excercises.type';

@Resolver(of => WorkoutType)
export class WorkoutResolver extends ModelsResolver<Workout> {

    public constructor(
        private excercisesService : WorkoutService) {
    super(excercisesService)
}

    @Query( returns => WorkoutType )
    Workout() {
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

        const res: WorkoutType = {
            id: '2',
            excercises: [WorkoutExcercise]
        };
        
        return res;
    }
}
