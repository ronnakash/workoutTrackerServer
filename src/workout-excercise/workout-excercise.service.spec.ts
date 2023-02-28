import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutExcerciseService } from './workout-excercise.service';

describe('WorkoutExcerciseService', () => {
  let service: WorkoutExcerciseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutExcerciseService],
    }).compile();

    service = module.get<WorkoutExcerciseService>(WorkoutExcerciseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
