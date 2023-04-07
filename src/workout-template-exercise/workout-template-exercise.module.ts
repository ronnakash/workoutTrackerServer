import { MiddlewareConsumer, Module } from '@nestjs/common';
import { WorkoutTemplateExerciseResolver } from './workout-template-exercise.resolver';
import { WorkoutTemplateExerciseService } from './workout-template-exercise.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutTemplateExerciseEntity } from './workout-template-exercise.entity';
import { ModelsModule } from '../models/models.module';
import { WorkoutTemplateExercise } from './workout-template-exercise.interfaces';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkoutTemplateExerciseEntity]),
  ],
  providers: [
    WorkoutTemplateExerciseService,
    WorkoutTemplateExerciseResolver,
  ],
  exports: [
    TypeOrmModule,
    WorkoutTemplateExerciseService,
],

})
// @UseGuards(ExistsJWTMiddleware, ValidateUserOrAdminMiddleware)
export class WorkoutTemplateExerciseModule extends ModelsModule<WorkoutTemplateExercise>{
  configure(consumer: MiddlewareConsumer) {
    super.configure(consumer);
    // consumer.apply(ExistsJWTMiddleware, ValidateUserOrAdminMiddleware).forRoutes(WorkoutResolver)
  }
}
