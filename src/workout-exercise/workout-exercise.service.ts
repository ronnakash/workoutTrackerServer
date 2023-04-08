import { Injectable } from '@nestjs/common';
import { ModelService } from '../models/models.service';
import { WorkoutExercise } from './workout-exercise.interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkoutExerciseEntity } from './workout-exercise.entity';
import { Repository } from 'typeorm';
import { ModelEntity } from '../models/models.entity';


@Injectable()
export class WorkoutExerciseService extends ModelService<WorkoutExercise, WorkoutExerciseEntity>{

    constructor(@InjectRepository(WorkoutExerciseEntity) 
        private exercisesRepository: Repository<WorkoutExerciseEntity>) {
            super(exercisesRepository);
    }

    newEntity(model: Partial<WorkoutExercise>): WorkoutExerciseEntity {
        const e = new WorkoutExerciseEntity(model);
        this.repository.save(e);
        return e;
    }

    async deleteOne(model: WorkoutExerciseEntity) {
        this.repository.softRemove(model);
    }

    async updateModel(model: Partial<WorkoutExercise>): Promise<ModelEntity<WorkoutExercise>> {
        this.exercisesRepository.update({workout: model.workout, exercise: model.exercise}, {...model});
        return await this.newEntity(model);
    }


}
