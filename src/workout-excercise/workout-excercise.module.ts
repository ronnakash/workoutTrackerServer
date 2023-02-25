import { Module } from '@nestjs/common';
import { WorkoutExcerciseResolver } from './workout-excercise.resolver';

@Module({
  providers: [WorkoutExcerciseResolver]
})
export class WorkoutExcerciseModule {}
