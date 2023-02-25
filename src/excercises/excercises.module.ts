import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ExcercisesService } from './excercises.service';
import { ExcercisesResolver } from './excercises.resolver';
// import { MuscleScalar } from './muscle.scalar';
import { ModelsModule } from 'src/models/models.module';
import { Excercise } from './excercises.interfaces';


@Module({
  providers: [
    ExcercisesService,
    ExcercisesResolver,
    // MuscleScalar,    
]
})
export class ExcercisesModule extends ModelsModule<Excercise> {
    configure(consumer: MiddlewareConsumer) {
    }
  }
  