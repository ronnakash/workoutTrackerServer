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
import { ExerciseEntity } from './excercise/excercise.entity';
import { WorkoutExerciseEntity } from './workout-excercise/workout-excercise.entity';
import { WorkoutEntity } from './workout/workout.entity';
import * as dotenv from "dotenv";
import * as path from "path";
import { APP_FILTER } from '@nestjs/core';
// import { HttpExceptionFilter } from './main';
import { UserService } from './user/user.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

dotenv.config({ path: path.join(process.cwd()+"/src/", ".env") });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mysql',
      url: process.env.DATABASE_URL,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      synchronize: true,
      // useUnifiedTopology: true,
      database: "workout_tracker",
      ssl: {
        rejectUnauthorized: true,
      },
      // authSource: 'admin',
      entities: [
        ExerciseEntity,
        WorkoutExerciseEntity,
        WorkoutEntity,
      ],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
    }),
    ExcercisesModule,
    WorkoutModule,
    WorkoutExcerciseModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UserService,
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
