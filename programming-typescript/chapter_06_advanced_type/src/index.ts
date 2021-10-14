import FunctionDegeneration from './FunctionDegeneration';
import TypeWidening from './TypeWidening';

const funcs = [FunctionDegeneration, TypeWidening];

for (const func of funcs) {
  func();
  console.log();
}
