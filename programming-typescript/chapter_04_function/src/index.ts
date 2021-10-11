import OptionAndDefaultParam from './OptionAndDefaultParam';
import RestParam from './RestParam';
import Generator from './Generator';
import Iterator from './Iterator';

const functions = [OptionAndDefaultParam, RestParam, Generator, Iterator];

for (const func of functions) {
  func();
  console.log('');
}
