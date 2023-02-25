import { Controller } from '@nestjs/common';
import { ModelBase } from './models.interfaces';

@Controller('models')
export abstract class ModelsController<M extends ModelBase> {}
