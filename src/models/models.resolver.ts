import { Resolver } from '@nestjs/graphql';
import { ModelBase } from './models.interfaces';
import { ModelEntity } from './models.entity';
// import { IModelService } from './models.service';

@Resolver()
export abstract class ModelsResolver<M extends ModelBase> {
    // service : IModelService<M>;


    // protected constructor(service : IModelService<M>) {
    //     this.service = service;
    // }

}
