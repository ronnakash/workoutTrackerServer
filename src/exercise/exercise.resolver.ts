import { Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ExerciseType, WeightedMuscleType } from "./exercise.type";
import { Exercise, Muscle, WeightedMuscle } from "./exercise.interfaces";
import { ModelsResolver } from "../models/models.resolver";
import { ExerciseEntity } from "./exercise.entity";
import { ExerciseService } from "./exercise.service";
import { ModelType } from "../models/models.type";

@Resolver(of => ExerciseType)
export class ExerciseResolver extends ModelsResolver<Exercise>{
    
    public constructor(
            private excercisesService : ExerciseService) {
        super(excercisesService)
    }

    @Query( returns => [ExerciseType] )
    async Excercises() : Promise<ModelType<Exercise>[]>{
        return await this.getAll();
    }
    
}
