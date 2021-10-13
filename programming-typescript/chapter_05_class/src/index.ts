import ReturnThis from './ReturnThis';
import Interface from './Interface';
import Polymorphism from './Polymorphism';
import Mixin from './Mixin';

const funcs = [ReturnThis, Interface, Polymorphism, Mixin];

for (const func of funcs) {
  func();
  console.log('');
}
