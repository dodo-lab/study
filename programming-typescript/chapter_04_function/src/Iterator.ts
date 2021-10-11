export default function Iterator() {
  console.log('[イテレータ]');

  const numbers = {
    *[Symbol.iterator]() {
      for (let n = 1; n <= 5; n++) {
        yield n;
      }
    },
  };

  // for-ofを使ったループが可能
  for (const n of numbers) {
    console.log(n);
  }

  // 配列に展開することも可能
  const allNumbers = [...numbers];
  console.log(allNumbers);

  // 分割割り当ても可能
  const [one, two, ...rest] = numbers;
  console.log(one, two, rest);
}
