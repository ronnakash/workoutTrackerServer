import { Injectable } from "@nestjs/common";
import { ModelService } from "../models/models.service";
import { WorkoutExerciseSet } from "./workout-exercise-set.interfaces";
import { WorkoutExerciseSetEntity } from "./workout-exercise-set.entity";
import { ModelEntity } from "../models/models.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class WorkoutExcerciseSetSrevice extends ModelService<WorkoutExerciseSet, WorkoutExerciseSetEntity>{
    
    constructor(@InjectRepository(WorkoutExerciseSetEntity) 
        private exercisesRepository: Repository<WorkoutExerciseSetEntity>) {
            super(exercisesRepository);
    }


    newEntity(model: WorkoutExerciseSet): WorkoutExerciseSetEntity {
        const e = new WorkoutExerciseSetEntity(model);
        this.repository.save(e);
        return e;
    }

    updateModel(model: Partial<WorkoutExerciseSet>): Promise<ModelEntity<WorkoutExerciseSet>> {
        throw new Error("Method not implemented.");
    }

}