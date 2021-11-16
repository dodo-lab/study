import add from './add';

type CalcType = 'Add' | 'Sub';

export default function calc(type: CalcType, a: number, b: number) {
  if (type === 'Add') {
    return add(a, b);
  } else {
    // unimplemented
  }
}
