import OptionAndDefaultParam from './OptionAndDefaultParam';
import RestParam from './RestParam';
import Generator from './Generator';
import Iterator from './Iterator';
import Overload from './Overload';
import Generics from './Generics';
import LimitationPolymorphism from './LimitationPolymorphism';

const functions = [
  OptionAndDefaultParam,
  RestParam,
  Generator,
  Iterator,
  Overload,
  Generics,
  LimitationPolymorphism,
];

for (const func of functions) {
  func();
  console.log('');
}
