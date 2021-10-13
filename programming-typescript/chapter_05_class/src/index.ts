import ReturnThis from './ReturnThis';
import Interface from './Interface';
import Polymorphism from './Polymorphism';

const funcs = [ReturnThis, Interface, Polymorphism];

for (const func of funcs) {
  func();
  console.log('');
}
