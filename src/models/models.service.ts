import { Injectable } from '@nestjs/common';
import { ModelBase, ModelBaseWithId } from './models.interfaces';
import { Repository } from 'typeorm';
import { ModelEntity, ModelEntityWithId } from './models.entity';

@Injectable()
export abstract class ModelService<M extends ModelBase, E extends ModelEntity<M>> implements IModelService<M, E> {
    repository!: Repository<ModelEntity<M>>;

    protected constructor(repository: Repository<E>) {
        this.repository = repository;
        // this.name = name;
    }

    async getAll() : Promise<E[]> {
        return (await this.repository.find()).map(e => e.toType() as E);
    }

    async getAllBy(model: Partial<M>): Promise<E[]> {
        return (await this.repository.find({where: {...model}})).map(e => e.toType() as E);
    }

    // async getOneById(id : string) : Promise<E> {
    //     return (await this.repository.findOne({where: {_id: id}})).toType() as E;
    // }

    async getOneBy(model: Partial<M>) : Promise<E> {
        return (await this.repository.findOne({where: {...model}})).toType() as E;
    }

    async createModel(model: Partial<M>): Promise<E> {
        const entity : ModelEntity<M> = await this.newEntity(model);
        return (await this.repository.save(entity)).toType() as E;
    }

    // async updateModel(model: Partial<M>): Promise<ModelEntity<M>> {
    //     await this.repository.update(model._id, {...model});
    //     return await this.newEntity(model);
    // }

    async deleteOne(model : E) : Promise<void> {
        await this.repository.softRemove(model);
    }

    // abstract deleteOne(model : E) : Promise<void>;

    // async deleteOneById(id : string) : Promise<void> {
    //     await this.repository.delete(id);
    // }

    abstract newEntity(model : Partial<M>) : E;

}

@Injectable()
export abstract class ModelServiceWithId<M extends ModelBaseWithId, E extends ModelEntityWithId<M>> 
        extends ModelService<M, E> implements IModelService<M, E>, IModelServiceWithId<M, E>{

    repository!: Repository<ModelEntityWithId<M>>;

    async getOneById(id : string) : Promise<E> {
        return (await this.repository.findOne({where: {_id: id}})).toType() as E;
    }

    async updateModel(model: Partial<M>): Promise<E> {
        await this.repository.update(model._id, {...model});
        return await this.newEntity(model);
    }

    async deleteOneById(id : string) : Promise<void> {
        await this.repository.softRemove({_id: id});
    }

    // async deleteOne(model: E) {
    //     this.repository.softRemove(model);
    // }
}

export interface IModelService<M extends ModelBase, E extends ModelEntity<M>> {
    getAll() : Promise<E[]>;
    getAllBy(model: M): Promise<E[]>;
    // getOneById(id : string) : Promise<ModelEntity<M>>;
    getOneBy(model: M) : Promise<E>;
    createModel(model: M): Promise<E> ;
    // updateModel(model: M): Promise<ModelEntity<M>>;
    deleteOne(model : ModelEntity<M>) : Promise<void>;
    // deleteOneById(id : string) : Promise<void>;
    newEntity(model : M) : ModelEntity<E>;
}

export interface IModelServiceWithId<M extends ModelBaseWithId, E extends ModelEntityWithId<M>> extends IModelService<M, E> {
    getOneById(id : string) : Promise<E>;
    deleteOneById(id : string) : Promise<void>;
    updateModel(model: Partial<M>): Promise<E>;
}


// export interface IModelService<M extends ModelBase, E extends ModelEntity<M>> {
//     getAll() : Promise<ModelEntity<M> []>;
//     getAllBy(model: M): Promise<ModelEntity<M>[]>;
//     // getOneById(id : string) : Promise<ModelEntity<M>>;
//     getOneBy(model: M) : Promise<ModelEntity<M>>;
//     createModel(model: M): Promise<ModelEntity<M>> ;
//     // updateModel(model: M): Promise<ModelEntity<M>>;
//     deleteOne(model : ModelEntity<M>) : Promise<void>;
//     // deleteOneById(id : string) : Promise<void>;
//     newEntity(model : M) : ModelEntity<M>;
// }

// export interface IModelServiceWithId<M extends ModelBaseWithId> extends IModelService<M> {
//     getOneById(id : string) : Promise<ModelEntityWithId<M>>;
//     deleteOneById(id : string) : Promise<void>;
//     updateModel(model: M): Promise<ModelEntityWithId<M>>;
// }