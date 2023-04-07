import { Injectable } from '@nestjs/common';
import { ModelService } from '../models/models.service';
import { WorkoutTemplateExercise } from './workout-template-exercise.interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkoutExerciseEntity } from '../workout-exercise/workout-exercise.entity';
import { Repository } from 'typeorm';
import { WorkoutTemplateExerciseEntity } from './workout-template-exercise.entity';

@Injectable()
export class WorkoutTemplateExerciseService extends ModelService<WorkoutTemplateExercise, WorkoutTemplateExerciseEntity>{

    constructor(@InjectRepository(WorkoutTemplateExerciseEntity) 
        private exercisesRepository: Repository<WorkoutTemplateExerciseEntity>) {
            super(exercisesRepository);
    }

    newEntity(model: WorkoutTemplateExercise): WorkoutTemplateExerciseEntity {
        return new WorkoutTemplateExerciseEntity(model);
    }

    async deleteOne(model: WorkoutExerciseEntity) {
        this.repository.softRemove(model);
    }

}
