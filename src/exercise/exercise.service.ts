import { Injectable } from '@nestjs/common';
import { ModelService, ModelServiceWithId } from '../models/models.service';
import { Exercise } from './exercise.interfaces';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciseEntity } from './exercise.entity';
import { ModelEntity } from '../models/models.entity';



@Injectable()
export class ExerciseService extends ModelServiceWithId<Exercise, ExerciseEntity>{


    constructor(@InjectRepository(ExerciseEntity) 
        private exercisesRepository: Repository<ExerciseEntity>) {
            super(exercisesRepository);
    }


    newEntity(model: Exercise): ExerciseEntity {
        // console.log("model");
        // console.log(model);
        const e = new ExerciseEntity(model);
        this.repository.save(e);
        return e;
    }


}
