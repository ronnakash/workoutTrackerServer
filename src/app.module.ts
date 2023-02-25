import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ExcercisesModule } from './excercises/excercises.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { WorkoutResolver } from './workout/workout.resolver';
import { WorkoutModule } from './workout/workout.module';
import { WorkoutExcerciseModule } from './workout-excercise/workout-excercise.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mongodb',
      url: process.env.MONGO_URI,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        
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
  providers: [AppService, WorkoutResolver],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
  }
}
