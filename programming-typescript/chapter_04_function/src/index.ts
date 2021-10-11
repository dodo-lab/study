import OptionAndDefaultParam from './OptionAndDefaultParam';
import RestParam from './RestParam';
import Generator from './Generator';
import Iterator from './Iterator';
import Overload from './Overload';
import Generics from './Generics';

const functions = [
  OptionAndDefaultParam,
  RestParam,
  Generator,
  Iterator,
  Overload,
  Generics,
];

for (const func of functions) {
  func();
  console.log('');
}
