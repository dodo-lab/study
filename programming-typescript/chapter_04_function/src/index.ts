import OptionAndDefaultParam from './OptionAndDefaultParam';
import RestParam from './RestParam';

const functions = [OptionAndDefaultParam, RestParam];

for (const func of functions) {
  func();
  console.log('');
}
