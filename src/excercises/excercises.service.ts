import { Injectable } from '@nestjs/common';
import { ModelService } from '../models/models.service';
import { Excercise } from './excercises.interfaces';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExcerciseEntity } from './excercises.entity';
import { ModelEntity } from '../models/models.entity';



@Injectable()
export class ExcercisesService extends ModelService<Excercise>{

    constructor(@InjectRepository(ExcerciseEntity) 
        private exercisesRepository: Repository<ExcerciseEntity>) {
            super(exercisesRepository);
    }


    newEntity(model: Excercise): ModelEntity<Excercise> {
        return new ExcerciseEntity(model);
    }

}
