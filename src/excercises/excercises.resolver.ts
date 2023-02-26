import { Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ExcerciseType, WeightedMuscleType } from "./excercises.type";
import { Excercise, Muscle, WeightedMuscle } from "./excercises.interfaces";
import { ModelsResolver } from "src/models/models.resolver";
import { ExcerciseEntity } from "./excercises.entity";

@Resolver(of => ExcerciseType)
export class ExcercisesResolver extends ModelsResolver<Excercise, ExcerciseEntity> {

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
