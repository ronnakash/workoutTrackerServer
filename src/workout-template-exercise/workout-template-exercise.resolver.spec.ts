import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutTemplateExerciseResolver } from './workout-template-exercise.resolver';

describe('WorkoutTemplateExerciseResolver', () => {
  let resolver: WorkoutTemplateExerciseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutTemplateExerciseResolver],
    }).compile();

    resolver = module.get<WorkoutTemplateExerciseResolver>(WorkoutTemplateExerciseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
