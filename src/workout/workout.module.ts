import { MiddlewareConsumer, Module, UseGuards } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutEntity } from './workout.entity';
import { WorkoutResolver } from './workout.resolver';
import { Workout } from './workout.interfaces';
import { ModelsModule } from '../models/models.module';
import { WorkoutExerciseService } from '../workout-exercise/workout-exercise.service';
import { WorkoutExerciseEntity } from '../workout-exercise/workout-exercise.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkoutEntity, WorkoutExerciseEntity]),
  ],
  providers: [
    WorkoutService,
    WorkoutResolver,
    WorkoutExerciseService,
  ],
  exports: [
    TypeOrmModule,
],
})
// @UseGuards(ExistsJWTMiddleware, ValidateUserOrAdminMiddleware)
export class WorkoutModule extends ModelsModule<Workout>{
  configure(consumer: MiddlewareConsumer) {
    super.configure(consumer);
    // consumer.apply(ExistsJWTMiddleware, ValidateUserOrAdminMiddleware).forRoutes(WorkoutResolver)
  }
}
