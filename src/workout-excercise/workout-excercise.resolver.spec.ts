import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutExerciseResolver } from './workout-excercise.resolver';

describe('WorkoutExcerciseResolver', () => {
  let resolver: WorkoutExerciseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutExerciseResolver],
    }).compile();

    resolver = module.get<WorkoutExerciseResolver>(WorkoutExerciseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
