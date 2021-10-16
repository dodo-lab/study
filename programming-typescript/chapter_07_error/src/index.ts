import NullReturn from './NullReturn';
import ExceptionThrow from './ExceptionThrow';
import ExceptionReturn from './ExceptionReturn';
import ArrayAndMap from './ArrayAndMap';

const funcs = [ArrayAndMap];

for (const func of funcs) {
  func();
  console.log();
}
