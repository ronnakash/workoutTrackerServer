import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutTemplateResolver } from './workout-template.resolver';

describe('WorkoutTemplateResolver', () => {
  let resolver: WorkoutTemplateResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutTemplateResolver],
    }).compile();

    resolver = module.get<WorkoutTemplateResolver>(WorkoutTemplateResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
