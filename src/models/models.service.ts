import { Injectable } from '@nestjs/common';
import { ModelBase } from './models.interfaces';

@Injectable()
export abstract class ModelsService<M extends ModelBase> {}
