import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ModelsController } from './models.controller';
import { ModelsService } from './models.service';
import { ModelBase } from './models.interfaces';
import { ModelsResolver } from './models.resolver';

@Module({
  providers: [ModelsResolver]
})
export abstract class ModelsModule<M extends ModelBase> implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    
  }
}
