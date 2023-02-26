import { Injectable } from '@nestjs/common';
import { ModelsService } from 'src/models/models.service';
import { Excercise } from './excercises.interfaces';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExcerciseEntity } from './excercises.entity';
import { ModelEntity } from 'src/models/models.entity';

@Injectable()
export class ExcercisesService extends ModelsService<Excercise>{

    constructor(@InjectRepository(ExcerciseEntity) private exercisesRepository: Repository<Excercise>) {
        super(exercisesRepository, "excercise");
    }

    // getAllBy(model: Excercise): Promise<ModelEntity<Excercise>[]> {
    //     return this.repository.find({where: {...model}});
    // }

    // async createModel(model: Excercise): Promise<ExcerciseEntity> {
    //     const excerciseEntity : ExcerciseEntity = new ExcerciseEntity(model);
    //     return await this.repository.save(excerciseEntity);
    // }

    async updateModel(model: ExcerciseEntity): Promise<ExcerciseEntity> {
        await this.repository.update(model._id, {...model});
        return new ExcerciseEntity(model);
    }

    newEntity(model: Excercise): ModelEntity<Excercise> {
        return new ExcerciseEntity(model);
    }

}
