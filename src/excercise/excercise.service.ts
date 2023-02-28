import { Injectable } from '@nestjs/common';
import { ModelService } from '../models/models.service';
import { Excercise } from './excercise.interfaces';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExcerciseEntity } from './excercise.entity';
import { ModelEntity } from '../models/models.entity';



@Injectable()
export class ExcerciseService extends ModelService<Excercise>{

    constructor(@InjectRepository(ExcerciseEntity) 
        private exercisesRepository: Repository<ExcerciseEntity>) {
            super(exercisesRepository);
    }


    newEntity(model: Excercise): ModelEntity<Excercise> {
        return new ExcerciseEntity(model);
    }

}
