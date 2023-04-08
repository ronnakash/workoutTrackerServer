import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { WorkoutExerciseSetType } from "./workout-exercise-set.type";
import { ModelsResolver } from "../models/models.resolver";
import { WorkoutExerciseSetEntity } from "./workout-exercise-set.entity";
import { WorkoutExerciseSet, WorkoutExerciseSetInput } from "./workout-exercise-set.interfaces";
import { WorkoutExcerciseSetSrevice } from "./workout-exercise-set.service";
import { ModelType } from "../models/models.type";

@Resolver(of => WorkoutExerciseSetType)
export class WorkoutExcerciseSetResolver extends ModelsResolver<WorkoutExerciseSet, WorkoutExerciseSetEntity>{
    
    public constructor(
            private excercisesService : WorkoutExcerciseSetSrevice) {
        super(excercisesService)
    }

    @Query( returns => [WorkoutExerciseSetType] )
    async Exercises() : Promise<ModelType<WorkoutExerciseSet>[]>{
        return await this.getAll();
    }

    @Mutation(() => WorkoutExerciseSetType)
    async createExercise(
      @Args('exercise') exercise: WorkoutExerciseSetInput,
    ): Promise<WorkoutExerciseSetType> {
        return (await super.create(exercise)).toType() as WorkoutExerciseSetType;
    }

}
  
