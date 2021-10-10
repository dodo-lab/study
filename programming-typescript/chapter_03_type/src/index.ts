import Unknown from './Unknown';
import ObjectTest from './ObjectTest';
import TypeAlias from './TypeAlias';

type Function = () => void;
const functions: Function[] = [Unknown, ObjectTest, TypeAlias];

for (const func of functions) {
  func();
  console.log('');
}
