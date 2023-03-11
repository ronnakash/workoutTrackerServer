import { Resolver } from '@nestjs/graphql';
import { ModelBase } from './models.interfaces';
import { ModelEntity } from './models.entity';
import { IModelService } from './models.service';
import { ModelType } from './models.type';

@Resolver()
export abstract class ModelsResolver<M extends ModelBase> {
    service : IModelService<M>;

    protected constructor(service : IModelService<M>) {
        this.service = service;
    }

    async getAll(): Promise<ModelType<M>[]> {
        const entities = await this.service.getAll();
        let result = entities.map(e => e.toType());
        return result;
    }

}
