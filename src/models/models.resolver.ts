import { Resolver } from '@nestjs/graphql';
import { ModelBase, ModelBaseWithId, ModelInput } from './models.interfaces';
import { ModelEntity, ModelEntityWithId } from './models.entity';
import { IModelService, IModelServiceWithId, ModelServiceWithId } from './models.service';
import { ModelType } from './models.type';

@Resolver()
export abstract class ModelsResolver<M extends ModelBase, E extends ModelEntity<M>> {
    service : IModelService<M, E>;

    protected constructor(service : IModelService<M, E>) {
        this.service = service;
    }

    async getAll(): Promise<ModelType<M>[]> {
        const entities = await this.service.getAll();
        // let result = entities.map(e => e.toType());
        return entities;
    }

    async create(input : ModelInput<M>) : Promise<E> {
        const newEntity = this.service.newEntity(input); 
        return newEntity;
    }

    async update(input : ModelInput<M>) : Promise<E> {
        const newEntity = this.service.newEntity(input); 
        return newEntity;
    }


}


@Resolver()
export abstract class ModelsResolverWithId<M extends ModelBaseWithId, E extends ModelEntityWithId<M>>
        extends ModelsResolver<M, E> {
    service : ModelServiceWithId<M, E>;

    protected constructor(service : ModelServiceWithId<M, E>) {
        super(service);
    }

    async getAll(): Promise<E[]> {
        const entities = await this.service.getAll();
        // let result = entities.map(e => e.toType() as E);
        return entities;
    }

}