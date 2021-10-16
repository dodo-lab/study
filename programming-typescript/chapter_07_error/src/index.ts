import NullReturn from './NullReturn';
import ExceptionThrow from './ExceptionThrow';
import ExceptionReturn from './ExceptionReturn';

const funcs = [ExceptionReturn];

for (const func of funcs) {
  func();
  console.log();
}
