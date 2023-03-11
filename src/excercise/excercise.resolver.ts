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

    @Query( returns => [ExcerciseType] )
    async Excercises() : Promise<ModelType<Excercise>[]>{
        return await this.getAll();
    }
    
}
