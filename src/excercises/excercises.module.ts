import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ExcercisesService } from './excercises.service';
import { ExcerciseResolver } from './excercises.resolver';
import { ModelsModule } from '../models/models.module';
import { Excercise } from './excercises.interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcerciseEntity } from './excercises.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([ExcerciseEntity]),
  ],
  providers: [
    ExcercisesService,
    ExcerciseResolver,
],
  exports: [
    TypeOrmModule,
    ExcercisesService,
],
})
export class ExcercisesModule extends ModelsModule<Excercise> {
    configure(consumer: MiddlewareConsumer) {
    }
  }
  