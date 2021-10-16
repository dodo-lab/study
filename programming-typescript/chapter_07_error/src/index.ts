import NullReturn from './NullReturn';
import ExceptionThrow from './ExceptionThrow';

const funcs = [ExceptionThrow];

for (const func of funcs) {
  func();
  console.log();
}
