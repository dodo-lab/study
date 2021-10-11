export default function RestParam() {
  console.log('[レストパラメータ]');

  function sumVariadicSafe(...numbers: number[]) {
    const total = numbers.reduce((total, n) => total + n, 0);
    console.log(numbers, 'total =>', total);
  }

  sumVariadicSafe(1, 2, 3, 4, 5);
}
