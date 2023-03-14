import { Injectable } from '@nestjs/common';
import { WorkoutEntity } from './workout.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModelService, ModelServiceWithId } from '../models/models.service';
import { Workout } from './workout.interfaces';
import { ModelEntity } from '../models/models.entity';


@Injectable()
export class WorkoutService extends ModelServiceWithId<Workout, WorkoutEntity>{

    constructor(@InjectRepository(WorkoutEntity) 
        private exercisesRepository: Repository<WorkoutEntity>) {
            super(exercisesRepository);
    }

    newEntity(model: Workout): WorkoutEntity {
        return new WorkoutEntity(model);
    }

}
