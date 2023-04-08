import { Args, Mutation, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ExerciseType, WeightedMuscleType } from "./exercise.type";
import { Exercise, ExerciseInput, Muscle, WeightedMuscle } from "./exercise.interfaces";
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
    async Exercises() : Promise<ModelType<Exercise>[]>{
        return await this.getAll();
    }

    @Mutation(() => ExerciseType)
    async createExercise(
      @Args('exercise') exercise: ExerciseInput,
    ): Promise<ExerciseType> {
      const newExercise = this.service.newEntity(exercise);
      return newExercise.toType() as ExerciseType;
    }

}
  
