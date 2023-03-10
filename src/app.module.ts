import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ExcercisesModule } from './exercise/exercise.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { WorkoutResolver } from './workout/workout.resolver';
import { WorkoutModule } from './workout/workout.module';
// import { WorkoutExcerciseModule } from './workout-exercise/workout-exercise.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEntity } from './exercise/exercise.entity';
import { WorkoutExerciseEntity } from './workout-exercise/workout-exercise.entity';
import { WorkoutEntity } from './workout/workout.entity';
import * as dotenv from "dotenv";
import * as path from "path";
import { APP_FILTER } from '@nestjs/core';
// import { HttpExceptionFilter } from './main';
import { UserService } from './user/user.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { WorkoutExerciseSetEntity } from './workout_exercise_set/workout-exercise-set.entity';

dotenv.config({ path: path.join(process.cwd()+"/src/", ".env") });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'postgres',
      url: process.env.SUPABASE_URL,
      username: process.env.SUPABASE_USERNAME,
      password: process.env.SUPABASE_PASSWORD,
      synchronize: true,
      // useUnifiedTopology: true,
      database: "postgres",
      // ssl: {
      //   rejectUnauthorized: true,
      // },
      // authSource: 'admin',
      entities: [
        ExerciseEntity,
        WorkoutExerciseEntity,
        WorkoutEntity,
        WorkoutExerciseSetEntity,
      ],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
    }),
    ExcercisesModule,
    WorkoutModule,
    // WorkoutExcerciseModule,
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
