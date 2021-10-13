import ReturnThis from './ReturnThis';
import Interface from './Interface';
import Polymorphism from './Polymorphism';
import Mixin from './Mixin';
import Decorator from './Decorator';
import FinalClass from './FinalClass';
import FactoryPattern from './FactoryPattern';
import BuilderPattern from './BuilderPattern';
import Training from './Training';

const funcs = [
  ReturnThis,
  Interface,
  Polymorphism,
  Mixin,
  Decorator,
  FinalClass,
  FactoryPattern,
  BuilderPattern,
  Training,
];

for (const func of funcs) {
  func();
  console.log('');
}
