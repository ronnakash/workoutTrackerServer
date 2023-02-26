import { Injectable } from '@nestjs/common';
import { ModelBase } from './models.interfaces';
import { DataSource, EntityTarget, FindManyOptions, FindOptionsWhere, MongoEntityManager, MongoRepository, Repository } from 'typeorm';
import { ModelEntity } from './models.entity';
import { ExcerciseEntity } from 'src/excercises/excercises.entity';

@Injectable()
export abstract class ModelsService<M extends ModelBase, T extends ModelEntity<M> > {
    repository!: Repository<T>;
    name!: string;
    et: EntityTarget<T>;

    protected constructor(repository: Repository<T>, name: string) {
        this.repository = repository;
        this.name = name;
    }

    async getAll() : Promise<T[]> {
        return await this.repository.find();
    }

    abstract getAllBy(model : M)  : Promise<T[]>;

    async getById(id : string) : Promise<T> {
        return await this.repository.findOneById(id)
    }

    abstract updateModel(model : M) : Promise<T>;

    abstract createModel(model : M) : Promise<T>;

    async deleteOne(model : T) : Promise<void> {
        await this.repository.delete(model._id);
    }

    async deleteOneById(id : string) : Promise<void> {
        await this.repository.delete(id);
    }

}
