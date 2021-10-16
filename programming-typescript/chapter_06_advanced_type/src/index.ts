import FunctionDegeneration from './FunctionDegeneration';
import TypeWidening from './TypeWidening';
import TypeRefinement from './TypeRefinement';
import Lookup from './Lookup';
import './PrototypeExtension';

const funcs = [FunctionDegeneration, TypeWidening, TypeRefinement, Lookup];

async function exec() {
  for (const func of funcs) {
    await func();
    console.log();
  }

  [1, 2, 3]
    .map((n) => n * 2)
    .zip(['a', 'b', 'c'])
    .forEach((v) => console.log(v));
}

exec();
