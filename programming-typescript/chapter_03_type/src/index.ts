import Unknown from './Unknown';
import ObjectTest from './ObjectTest';
import TypeAlias from './TypeAlias';
import MergeCross from './MergeCross';

type Function = () => void;
const functions: Function[] = [Unknown, ObjectTest, TypeAlias, MergeCross];

for (const func of functions) {
  func();
  console.log('');
}
