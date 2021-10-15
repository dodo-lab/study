import FunctionDegeneration from './FunctionDegeneration';
import TypeWidening from './TypeWidening';
import TypeRefinement from './TypeRefinement';
import Lookup from './Lookup';

const funcs = [FunctionDegeneration, TypeWidening, TypeRefinement, Lookup];

async function exec() {
  for (const func of funcs) {
    await func();
    console.log();
  }
}

exec();
