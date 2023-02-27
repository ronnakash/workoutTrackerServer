import { Injectable } from '@nestjs/common';
import { ModelBase } from './models.interfaces';
import { DataSource, EntityTarget, FindManyOptions, FindOptionsWhere, MongoEntityManager, MongoRepository, Repository } from 'typeorm';
import { ModelEntity } from './models.entity';
import { ExcerciseEntity } from 'src/excercises/excercises.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export abstract class ModelService<M extends ModelBase> implements IModelService<M> {
    repository!: Repository<ModelEntity<M> >;

    protected constructor(repository: Repository<ModelEntity<M> >) {
        this.repository = repository;
        // this.name = name;
    }

    async getAll() : Promise<ModelEntity<M> []> {
        return await this.repository.find();
    }

    async getAllBy(model: M): Promise<ModelEntity<M>[]> {
        return await this.repository.find({where: {...model}});
    }

    async getOneById(id : string) : Promise<ModelEntity<M>> {
        return await this.repository.findOne({where: {_id: id}});
    }

    async getOneBy(model: M) : Promise<ModelEntity<M>> {
        return await this.repository.findOne({where: {...model}});
    }

    async createModel(model: M): Promise<ModelEntity<M>> {
        const entity : ModelEntity<M> = await this.newEntity(model);
        return await this.repository.save(entity);
    }

    async updateModel(model: M): Promise<ModelEntity<M>> {
        await this.repository.update(model._id, {...model});
        return await this.newEntity(model);
    }

    async deleteOne(model : ModelEntity<M>) : Promise<void> {
        await this.repository.delete(model._id);
    }

    async deleteOneById(id : string) : Promise<void> {
        await this.repository.delete(id);
    }

    abstract newEntity(model : M) : ModelEntity<M>;

}


export interface IModelService<M extends ModelBase> {
    getAll() : Promise<ModelEntity<M> []>;
    getAllBy(model: M): Promise<ModelEntity<M>[]>;
    getOneById(id : string) : Promise<ModelEntity<M>>;
    getOneBy(model: M) : Promise<ModelEntity<M>>;
    createModel(model: M): Promise<ModelEntity<M>> ;
    updateModel(model: M): Promise<ModelEntity<M>>;
    deleteOne(model : ModelEntity<M>) : Promise<void>;
    deleteOneById(id : string) : Promise<void>;
    newEntity(model : M) : ModelEntity<M>;
}

export function BaseModelService<M extends ModelBase>() {
    
    @Injectable()
    abstract class ModelsService implements IModelService<M> {
        @InjectRepository(ModelEntity<M>) public readonly repository: Repository<ModelEntity<M>>;

        constructor() {}
    
        async getAll() : Promise<ModelEntity<M> []> {
            return await this.repository.find();
        }
    
        async getAllBy(model: M): Promise<ModelEntity<M>[]> {
            return await this.repository.find({where: {...model}});
        }
    
        async getOneById(id : string) : Promise<ModelEntity<M>> {
            return await this.repository.findOne({where: {_id: id}});
        }
    
        async getOneBy(model: M) : Promise<ModelEntity<M>> {
            return await this.repository.findOne({where: {...model}});
        }
    
        async createModel(model: M): Promise<ModelEntity<M>> {
            const entity : ModelEntity<M> = await this.newEntity(model);
            return await this.repository.save(entity);
        }
    
        async updateModel(model: M): Promise<ModelEntity<M>> {
            await this.repository.update(model._id, {...model});
            return await this.newEntity(model);
        }
    
        async deleteOne(model : ModelEntity<M>) : Promise<void> {
            await this.repository.delete(model._id);
        }
    
        async deleteOneById(id : string) : Promise<void> {
            await this.repository.delete(id);
        }
    
        abstract newEntity(model : M) : ModelEntity<M>;
    
    }

    return ModelsService;

}