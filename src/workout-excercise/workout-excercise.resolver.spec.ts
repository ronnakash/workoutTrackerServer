import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutExcerciseResolver } from './workout-excercise.resolver';

describe('WorkoutExcerciseResolver', () => {
  let resolver: WorkoutExcerciseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutExcerciseResolver],
    }).compile();

    resolver = module.get<WorkoutExcerciseResolver>(WorkoutExcerciseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
