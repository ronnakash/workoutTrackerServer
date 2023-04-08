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

    newEntity(model: WorkoutExercise): WorkoutExerciseEntity {
        const e = new WorkoutExerciseEntity(model);
        this.repository.save(e);
        return e;
    }

    async deleteOne(model: WorkoutExerciseEntity) {
        this.repository.softRemove(model);
    }

    updateModel(model: Partial<WorkoutExercise>): Promise<ModelEntity<WorkoutExercise>> {
        throw new Error('Method not implemented.');
    }


}
