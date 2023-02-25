import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ModelsController } from './models.controller';
import { ModelsService } from './models.service';
import { ModelBase } from './models.interfaces';

@Module({})
export abstract class ModelsModule<M extends ModelBase> implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    
  }
}
