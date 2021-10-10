import Unknown from "./Unknown";
import ObjectTest from "./ObjectTest";

type Function = () => void;
const functions: Function[] = [
  Unknown,
  ObjectTest,
]

for(const func of functions) {
  func();
  console.log('');
}
