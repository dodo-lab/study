import OptionAndDefaultParam from './OptionAndDefaultParam';
import RestParam from './RestParam';
import Generator from './Generator';
import Iterator from './Iterator';
import Overload from './Overload';

const functions = [
  OptionAndDefaultParam,
  RestParam,
  Generator,
  Iterator,
  Overload,
];

for (const func of functions) {
  func();
  console.log('');
}
