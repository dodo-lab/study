export default function Generator() {
  console.log('[ジェネレータ]');

  function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }

  const fibonacciGenerator = createFibonacciGenerator();
  console.log(fibonacciGenerator.next());
  console.log(fibonacciGenerator.next());
  console.log(fibonacciGenerator.next());
  console.log(fibonacciGenerator.next());
  console.log(fibonacciGenerator.next());
}
