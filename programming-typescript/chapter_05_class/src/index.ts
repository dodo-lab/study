import ReturnThis from './ReturnThis';
import Interface from './Interface';

const funcs = [ReturnThis, Interface];

for (const func of funcs) {
  func();
  console.log('');
}
