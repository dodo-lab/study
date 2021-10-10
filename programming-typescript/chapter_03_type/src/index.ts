import Unknown from './Unknown';
import ObjectTest from './ObjectTest';
import TypeAlias from './TypeAlias';
import MergeCross from './MergeCross';
import Tuple from './Tuple';

type Function = () => void;
const functions: Function[] = [
  Unknown,
  ObjectTest,
  TypeAlias,
  MergeCross,
  Tuple,
];

for (const func of functions) {
  func();
  console.log('');
}
