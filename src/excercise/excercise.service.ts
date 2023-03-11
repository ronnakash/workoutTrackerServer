import { Injectable } from '@nestjs/common';
import { ModelService } from '../models/models.service';
import { Exercise } from './excercise.interfaces';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciseEntity } from './excercise.entity';
import { ModelEntity } from '../models/models.entity';



@Injectable()
export class ExcerciseService extends ModelService<Exercise>{

    constructor(@InjectRepository(ExerciseEntity) 
        private exercisesRepository: Repository<ExerciseEntity>) {
            super(exercisesRepository);
    }


    newEntity(model: Exercise): ModelEntity<Exercise> {
        return new ExerciseEntity(model);
    }

}
