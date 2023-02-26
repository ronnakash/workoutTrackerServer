import { Injectable } from '@nestjs/common';
import { ModelService } from 'src/models/models.service';
import { Excercise } from './excercises.interfaces';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExcerciseEntity } from './excercises.entity';
import { ModelEntity } from 'src/models/models.entity';

@Injectable()
export class ExcercisesService extends ModelService<Excercise>{

    constructor(@InjectRepository(ExcerciseEntity) private exercisesRepository: Repository<Excercise>) {
        super(exercisesRepository);
    }



    newEntity(model: Excercise): ModelEntity<Excercise> {
        return new ExcerciseEntity(model);
    }

}
