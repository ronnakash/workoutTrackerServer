import { MiddlewareConsumer, Module } from '@nestjs/common';
import { WorkoutTemplateResolver } from './workout-template.resolver';
import { WorkoutTemplateService } from './workout-template.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutTemplateEntity } from './workout-template.entity';
import { ModelsModule } from 'src/models/models.module';
import { WorkoutTemplate } from './workout-template.interfaces';

@Module({
    imports: [
        TypeOrmModule.forFeature([WorkoutTemplateEntity, WorkoutTemplateEntity]),
      ],
  providers: [
    WorkoutTemplateResolver,
    WorkoutTemplateService],
    exports: [
        TypeOrmModule,
    ],
})
// @UseGuards(ExistsJWTMiddleware, ValidateUserOrAdminMiddleware)
export class WorkoutTemplateModule extends ModelsModule<WorkoutTemplate>{
    configure(consumer: MiddlewareConsumer) {
      super.configure(consumer);
      // consumer.apply(ExistsJWTMiddleware, ValidateUserOrAdminMiddleware).forRoutes(WorkoutResolver)
    }
  }
  