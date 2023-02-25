import { Query, Resolver } from '@nestjs/graphql';
import { WorkoutType } from './workout.type';
import { WorkoutExcerciseType } from 'src/workout-excercise/workout-excercise.type';
import { ExcerciseType } from 'src/excercises/excercises.type';

@Resolver(of => WorkoutType)
export class WorkoutResolver {

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
