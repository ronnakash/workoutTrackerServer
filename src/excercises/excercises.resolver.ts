import { Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ExcerciseType, WeightedMuscleType } from "./excercises.type";
import { Muscle, WeightedMuscle } from "./excercises.interfaces";

@Resolver(of => ExcerciseType)
export class ExcercisesResolver {

    @Query( returns => ExcerciseType )
    Excercise() {

        const res: ExcerciseType = {
            id: '1',
            name: "Bench Press",
            musclesWorked: [
                { muscle: "Chest", workload: 100 },
                { muscle: "Shoulders", workload: 80 },
                { muscle: "Triceps", workload: 60 },],
            workload: 100,
        };
        
        return res;
    }
}
