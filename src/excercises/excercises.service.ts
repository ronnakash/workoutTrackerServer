import { Injectable } from '@nestjs/common';
// import { BaseModelService, ModelService } from 'src/models/models.service';
import { Excercise } from './excercises.interfaces';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExcerciseEntity } from './excercises.entity';
import { ModelEntity } from 'src/models/models.entity';

// @Injectable()
// export class ExcercisesService extends BaseModelService<Excercise>(){

//     newEntity(model: Excercise): ModelEntity<Excercise> {
//         return new ExcerciseEntity(model);
//     }

// }



// @Injectable()
// export class ExcercisesService extends ModelService<Excercise>{

//     constructor(@InjectRepository(ExcerciseEntity) private exercisesRepository: Repository<ExcerciseEntity>) {
//         super(exercisesRepository);
//     }



//     newEntity(model: Excercise): ModelEntity<Excercise> {
//         return new ExcerciseEntity(model);
//     }

// }

@Injectable()
export class ExcercisesService {

}

