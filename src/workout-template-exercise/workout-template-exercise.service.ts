import { Injectable } from '@nestjs/common';
import { ModelService } from '../models/models.service';
import { WorkoutTemplateExercise } from './workout-template-exercise.interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkoutExerciseEntity } from '../workout-exercise/workout-exercise.entity';
import { Repository } from 'typeorm';
import { WorkoutTemplateExerciseEntity } from './workout-template-exercise.entity';
import { ModelEntity } from 'src/models/models.entity';
import { throwIfEmpty } from 'rxjs';

@Injectable()
export class WorkoutTemplateExerciseService extends ModelService<WorkoutTemplateExercise, WorkoutTemplateExerciseEntity>{

    constructor(@InjectRepository(WorkoutTemplateExerciseEntity) 
        private exercisesRepository: Repository<WorkoutTemplateExerciseEntity>) {
            super(exercisesRepository);
    }

    newEntity(model: Partial<WorkoutTemplateExercise>): WorkoutTemplateExerciseEntity {
        const e = new WorkoutTemplateExerciseEntity(model);
        this.repository.save(e);
        return e;

    }

    async deleteOne(model: WorkoutExerciseEntity) {
        this.repository.softRemove(model);
    }

    async updateModel(model: Partial<WorkoutTemplateExercise>): Promise<ModelEntity<WorkoutTemplateExercise>> {
        this.exercisesRepository.update({workout: model.workout, exercise: model.exercise}, {...model});
        return await this.newEntity(model);
    }

}
