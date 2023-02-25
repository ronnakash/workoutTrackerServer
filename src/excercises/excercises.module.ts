import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ExcercisesService } from './excercises.service';
import { ExcercisesResolver } from './excercises.resolver';
import { ModelsModule } from 'src/models/models.module';
import { Excercise } from './excercises.interfaces';


@Module({
  providers: [
    ExcercisesService,
    ExcercisesResolver,
]
})
export class ExcercisesModule extends ModelsModule<Excercise> {
    configure(consumer: MiddlewareConsumer) {
    }
  }
  