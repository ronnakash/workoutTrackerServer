import { Query, Resolver } from '@nestjs/graphql';
import { WorkoutExcerciseType } from './workout-excercise.type';
import { ExcerciseType } from '../excercise/excercise.type';

@Resolver()
export class WorkoutExcerciseResolver {

    @Query( returns => WorkoutExcerciseType )
    WorkoutExcercise() {
        console.log("\n\nWorkoutExcerciseResolver\n\n")
        const excercise: ExcerciseType = {
            _id: '1',
            name: "Bench Press",
            musclesWorked: [
                { muscle: "Chest", workload: 100 },
                { muscle: "Shoulders", workload: 80 },
                { muscle: "Triceps", workload: 60 },],
            workload: 100,
        };

        const WorkoutExcercise: WorkoutExcerciseType = {
            _id: '1',
            excercise: excercise,
            reps: 6, 
            sets: 4,
        };
        
        return WorkoutExcercise;
    }

}
