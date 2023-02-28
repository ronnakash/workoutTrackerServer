import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ExcercisesModule } from './excercise/excercise.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { WorkoutResolver } from './workout/workout.resolver';
import { WorkoutModule } from './workout/workout.module';
import { WorkoutExcerciseModule } from './workout-excercise/workout-excercise.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcerciseEntity } from './excercise/excercise.entity';
import { WorkoutExcerciseEntity } from './workout-excercise/workout-excercise.entity';
import { WorkoutEntity } from './workout/workout.entity';
import * as dotenv from "dotenv";
import * as path from "path";
import { APP_FILTER } from '@nestjs/core';
// import { HttpExceptionFilter } from './main';

dotenv.config({ path: path.join(process.cwd()+"/src/", ".env") });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mongodb',
      url: process.env.MONGO_URI,
      synchronize: true,
      useUnifiedTopology: true,
      database: "WorkoutTracker",
      authSource: 'admin',
      entities: [
        ExcerciseEntity,
        WorkoutExcerciseEntity,
        WorkoutEntity,
      ],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
    }),
    ExcercisesModule,
    WorkoutModule,
    WorkoutExcerciseModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
  }
}
