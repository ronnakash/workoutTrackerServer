import { Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ExcerciseType, WeightedMuscleType } from "./excercise.type";
import { Excercise, Muscle, WeightedMuscle } from "./excercise.interfaces";
import { ModelsResolver } from "../models/models.resolver";
import { ExcerciseEntity } from "./excercise.entity";
import { ExcerciseService } from "./excercise.service";
import { ModelType } from "../models/models.type";

@Resolver(of => ExcerciseType)
export class ExcerciseResolver extends ModelsResolver<Excercise>{
    
    public constructor(
            private excercisesService : ExcerciseService) {
        super(excercisesService)
    }

    @Query( returns => ExcerciseType )
    async Excercise() : Promise<ModelType<Excercise>[]>{
        console.log("\n\nExcerciseResolver\n\n")
        const res: ExcerciseType = {
            _id: '1',
            name: "Bench Press",
            musclesWorked: [
                { muscle: "Chest", workload: 100 },
                { muscle: "Shoulders", workload: 80 },
                { muscle: "Triceps", workload: 60 },],
            workload: 100,
        };
        const temp = await this.service.getAll();
        var result = temp.map(e => e.toType());
        result.push(res);
        return result;
    }
    
}
