export default function Unknown() {
  console.log('[unknown]');
  let a: unknown = 30;
  // let b = a + 10;  // エラー
  if (typeof a === 'number') {
    let c = a + 20;
    console.log(a, c);
  }
}
