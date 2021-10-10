export default function Tuple() {
  console.log('[タプル]');

  // [名, 姓, 生まれ年]のタプル
  const human: [string, string, number] = ['malcolm', 'gladwell', 1963];
  console.log(human);
  // タプルは省略可能な要素をサポート
  const trainFares: [number, number?][] = [[3.75], [8.25, 7.7], [10.5]];
  console.log(trainFares);
  // タプルは可変長の要素をサポート
  const firends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire'];
  const list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c'];
  console.log(firends);
  console.log(list);
}
