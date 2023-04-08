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
// import { HttpExceptionFilter } from './main';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';
import { WorkoutExerciseSetEntity } from './workout_exercise_set/workout-exercise-set.entity';
import { UserEntity } from './user/user.entity';
import { WorkoutTemplateModule } from './workout-template/workout-template.module';
import { WorkoutTemplateEntity } from './workout-template/workout-template.entity';
import { WorkoutTemplateExerciseModule } from './workout-template-exercise/workout-template-exercise.module';
import { WorkoutTemplateExerciseEntity } from './workout-template-exercise/workout-template-exercise.entity';

dotenv.config({ path: path.join(process.cwd()+"/src/", ".env") });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'postgres',
      url: process.env.SUPABASE_URL,
      username: process.env.SUPABASE_USERNAME,
      password: process.env.SUPABASE_PASSWORD,
      synchronize: true,
      database: "postgres",
      entities: [
        ExerciseEntity,
        WorkoutExerciseEntity,
        WorkoutEntity,
        WorkoutExerciseSetEntity,
        UserEntity,
        WorkoutTemplateEntity,
        WorkoutTemplateExerciseEntity
      ],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'src/tmp/schema.gql',
      driver: ApolloDriver,
      debug: process.env.ENVIRONMENT !== 'dev',
      playground: process.env.ENVIRONMENT == 'dev',
      context: ({ req }) => ({ req }),
    }),
    ExcercisesModule,
    WorkoutModule,
    // WorkoutExcerciseModule,
    AuthModule,
    WorkoutModule,
    WorkoutTemplateModule,
    WorkoutTemplateExerciseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UserService,

  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {

  }
}
