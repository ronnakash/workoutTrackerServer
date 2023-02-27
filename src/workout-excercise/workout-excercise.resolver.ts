import { Query, Resolver } from '@nestjs/graphql';
import { WorkoutExcerciseType } from './workout-excercise.type';
import { ExcerciseType } from 'src/excercises/excercises.type';

// @Resolver(of => WorkoutExcerciseType)
@Resolver()
export class WorkoutExcerciseResolver {

    @Query( returns => WorkoutExcerciseType )
    WorkoutExcercise() {
        const excercise: ExcerciseType = {
            id: '1',
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
        
        return WorkoutExcercise;
    }

}
