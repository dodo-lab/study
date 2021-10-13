import ReturnThis from './ReturnThis';
import Interface from './Interface';
import Polymorphism from './Polymorphism';
import Mixin from './Mixin';
import Decorator from './Decorator';

const funcs = [ReturnThis, Interface, Polymorphism, Mixin, Decorator];

for (const func of funcs) {
  func();
  console.log('');
}
