import { Injectable } from '@nestjs/common';
import { WorkoutTemplate } from './workout-template.interfaces';
import { WorkoutTemplateEntity } from './workout-template.entity';
import { ModelServiceWithId } from '../models/models.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class WorkoutTemplateService extends ModelServiceWithId<WorkoutTemplate, WorkoutTemplateEntity>{

    constructor(@InjectRepository(WorkoutTemplateEntity) 
        private exercisesRepository: Repository<WorkoutTemplateEntity>) {
            super(exercisesRepository);
    }

    newEntity(model: WorkoutTemplate): WorkoutTemplateEntity {
        return new WorkoutTemplateEntity(model);
    }

}
