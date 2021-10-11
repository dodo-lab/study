import OptionAndDefaultParam from './OptionAndDefaultParam';
import RestParam from './RestParam';
import Generator from './Generator';

const functions = [OptionAndDefaultParam, RestParam, Generator];

for (const func of functions) {
  func();
  console.log('');
}
