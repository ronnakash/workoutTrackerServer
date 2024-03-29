import { Resolver } from '@nestjs/graphql';
import { ModelBase, ModelBaseWithId } from './models.interfaces';
import { ModelEntity, ModelEntityWithId } from './models.entity';
import { IModelService, IModelServiceWithId, ModelServiceWithId } from './models.service';
import { ModelType } from './models.type';
import { ModelInput } from './models.input';

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
        console.log("\n input: \n")
        console.log(input)
        console.log("")
        const newEntity = this.service.newEntity(input); 
        console.log("\n entity: \n")
        console.log(newEntity)
        console.log("")
        return newEntity;
    }

    async update(input : ModelInput<M>) : Promise<E> {
        const newEntity = await this.service.updateModel(input as M); 
        return newEntity.toType() as E;
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