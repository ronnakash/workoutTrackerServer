import { Args, Mutation, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ExerciseType, WeightedMuscleType } from "./exercise.type";
import { Exercise, Muscle, WeightedMuscle } from "./exercise.interfaces";
import { ModelsResolver, ModelsResolverWithId } from "../models/models.resolver";
import { ExerciseEntity } from "./exercise.entity";
import { ExerciseService } from "./exercise.service";
import { ModelType } from "../models/models.type";
import { create } from "domain";
import { ExerciseInput } from "./exercise.input";

@Resolver(of => ExerciseType)
export class ExerciseResolver extends ModelsResolverWithId<Exercise, ExerciseEntity>{
    
    public constructor(
            private excercisesService : ExerciseService) {
        super(excercisesService)
    }

    @Query( returns => [ExerciseType] )
    async Exercises() : Promise<ModelType<Exercise>[]>{
        return await this.getAll();
    }

    @Mutation(() => ExerciseType)
    async createExercise(
      @Args('exercise') exercise: ExerciseInput,
    ): Promise<ExerciseType> {
        return (await super.create(exercise)).toType() as ExerciseType;
    }

}
  
