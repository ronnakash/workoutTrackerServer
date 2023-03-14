import { Injectable } from '@nestjs/common';
import { ModelService, ModelServiceWithId } from '../models/models.service';
import { User } from './user.interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { ModelEntity } from '../models/models.entity';

@Injectable()
export class UserService extends ModelServiceWithId<User, UserEntity>{

    constructor(@InjectRepository(UserEntity) 
        private userRepository: Repository<UserEntity>) {
            super(userRepository);
    }


    newEntity(model: User): UserEntity {
        return new UserEntity(model);
    }}
