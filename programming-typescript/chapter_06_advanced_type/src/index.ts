import FunctionDegeneration from './FunctionDegeneration';
import TypeWidening from './TypeWidening';
import TypeRefinement from './TypeRefinement';

const funcs = [FunctionDegeneration, TypeWidening, TypeRefinement];

for (const func of funcs) {
  func();
  console.log();
}
