import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutExerciseSetEntity } from './workout-exercise-set.entity';
import { WorkoutExerciseSet } from './workout-exercise-set.interfaces';
import { ModelsModule } from 'src/models/models.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkoutExerciseSetEntity]),
  ],
  providers: [
],
  exports: [
    TypeOrmModule,
],
})
export class WorkoutExcerciseModule{
    configure(consumer: MiddlewareConsumer) {
    }
  }