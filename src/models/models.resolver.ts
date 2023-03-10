import { Resolver } from '@nestjs/graphql';
import { ModelBase, ModelBaseWithId } from './models.interfaces';
import { ModelEntity, ModelEntityWithId } from './models.entity';
import { IModelService, IModelServiceWithId, ModelServiceWithId } from './models.service';
import { ModelType } from './models.type';

@Resolver()
export abstract class ModelsResolver<M extends ModelBase> {
    service : IModelService<M, ModelEntity<M>>;

    protected constructor(service : IModelService<M, ModelEntity<M>>) {
        this.service = service;
    }

    async getAll(): Promise<ModelType<M>[]> {
        const entities = await this.service.getAll();
        // let result = entities.map(e => e.toType());
        return entities;
    }

}


@Resolver()
export abstract class ModelsResolverWithId<M extends ModelBaseWithId, E extends ModelEntityWithId<M>> {
    service : ModelServiceWithId<M, E>;

    protected constructor(service : ModelServiceWithId<M, E>) {
        this.service = service;
    }

    async getAll(): Promise<E[]> {
        const entities = await this.service.getAll();
        // let result = entities.map(e => e.toType() as E);
        return entities;
    }

}