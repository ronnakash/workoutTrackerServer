import { Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ExerciseType, WeightedMuscleType } from "./excercise.type";
import { Exercise, Muscle, WeightedMuscle } from "./excercise.interfaces";
import { ModelsResolver } from "../models/models.resolver";
import { ExerciseEntity } from "./excercise.entity";
import { ExcerciseService } from "./excercise.service";
import { ModelType } from "../models/models.type";

@Resolver(of => ExerciseType)
export class ExcerciseResolver extends ModelsResolver<Exercise>{
    
    public constructor(
            private excercisesService : ExcerciseService) {
        super(excercisesService)
    }

    @Query( returns => [ExerciseType] )
    async Excercises() : Promise<ModelType<Exercise>[]>{
        return await this.getAll();
    }
    
}
