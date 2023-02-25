// import { Scalar } from '@nestjs/graphql';
// import { Muscle } from './excercises.interfaces';
// import { Kind } from 'graphql/language/kinds';

// @Scalar('Muscle')
// export class MuscleScalar {
//   parseValue(value: string) {
//     return Muscle[value];
//   }

//   serialize(value: Muscle) {
//     return value;
//   }

//   parseLiteral(ast) {
//     if (ast.kind === Kind.STRING) {
//       return Muscle[ast.value];
//     }
//     return null;
//   }
// }
