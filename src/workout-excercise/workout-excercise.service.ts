import { Injectable } from '@nestjs/common';
import { ModelService } from '../models/models.service';
import { WorkoutExcercise } from './workout-excercise.interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkoutExcerciseEntity } from './workout-excercise.entity';
import { Repository } from 'typeorm';
import { ModelEntity } from '../models/models.entity';


@Injectable()
export class WorkoutExcerciseService extends ModelService<WorkoutExcercise>{

    constructor(@InjectRepository(WorkoutExcerciseEntity) 
        private exercisesRepository: Repository<WorkoutExcerciseEntity>) {
            super(exercisesRepository);
    }


    newEntity(model: WorkoutExcercise): ModelEntity<WorkoutExcercise> {
        return new WorkoutExcerciseEntity(model);
    }

}
