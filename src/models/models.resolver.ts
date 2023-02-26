import { Resolver } from '@nestjs/graphql';
import { ModelBase } from './models.interfaces';
import { ModelEntity } from './models.entity';

@Resolver()
export abstract class ModelsResolver<M extends ModelBase, T extends ModelEntity<M> > {
    
}
