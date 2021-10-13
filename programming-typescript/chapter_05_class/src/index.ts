import ReturnThis from './ReturnThis';
import Interface from './Interface';
import Polymorphism from './Polymorphism';
import Mixin from './Mixin';
import Decorator from './Decorator';
import FinalClass from './FinalClass';
import FactoryPattern from './FactoryPattern';

const funcs = [
  ReturnThis,
  Interface,
  Polymorphism,
  Mixin,
  Decorator,
  FinalClass,
  FactoryPattern,
];

for (const func of funcs) {
  func();
  console.log('');
}
