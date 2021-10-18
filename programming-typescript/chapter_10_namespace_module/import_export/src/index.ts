import { foo, bar } from './a';
import meow from './b';
import { barCopy } from './d';
import { X } from './e';

foo();
bar();
meow(10);
barCopy();

// Xは、値Xを指す
const a = X + 1;
console.log(a);

// Xは、型Xを指す
const b: X = { y: 'z' };
console.log(b);
