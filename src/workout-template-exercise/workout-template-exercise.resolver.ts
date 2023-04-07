import { Query, Resolver } from '@nestjs/graphql';
import { ModelsResolver } from '../models/models.resolver';
import { WorkoutTemplateExercise } from './workout-template-exercise.interfaces';
import { WorkoutTemplateExerciseService } from './workout-template-exercise.service';
import { WorkoutTemplateExerciseType } from './workout-template-exercise.type';

@Resolver()
export class WorkoutTemplateExerciseResolver extends ModelsResolver<WorkoutTemplateExercise> {
    
    public constructor(
        private workoutTemplateExerciseService : WorkoutTemplateExerciseService) {
            super(workoutTemplateExerciseService)
    }
    @Query( returns => [WorkoutTemplateExerciseType] )
    WorkoutTemplateExcercises() {
        return this.getAll();
    }


}
