import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutTemplateExerciseService } from './workout-template-exercise.service';

describe('WorkoutTemplateExerciseService', () => {
  let service: WorkoutTemplateExerciseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutTemplateExerciseService],
    }).compile();

    service = module.get<WorkoutTemplateExerciseService>(WorkoutTemplateExerciseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
