import { Injectable } from '@nestjs/common';
import { ModelService } from '../models/models.service';
import { Exercise } from './exercise.interfaces';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciseEntity } from './exercise.entity';
import { ModelEntity } from '../models/models.entity';



@Injectable()
export class ExerciseService extends ModelService<Exercise>{

    constructor(@InjectRepository(ExerciseEntity) 
        private exercisesRepository: Repository<ExerciseEntity>) {
            super(exercisesRepository);
    }


    newEntity(model: Exercise): ModelEntity<Exercise> {
        return new ExerciseEntity(model);
    }

}
