import Unknown from './Unknown';
import ObjectTest from './ObjectTest';
import TypeAlias from './TypeAlias';
import MergeCross from './MergeCross';
import Tuple from './Tuple';
import Enum from './Enum';

type Function = () => void;
const functions: Function[] = [
  Unknown,
  ObjectTest,
  TypeAlias,
  MergeCross,
  Tuple,
  Enum,
];

for (const func of functions) {
  func();
  console.log('');
}
