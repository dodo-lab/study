/**
 * スプレッド構文
 */

const peaks = ['Tallac', 'Ralston', 'Rose'];
const canyons = ['Ward', 'Blackwood'];

// 配列の結合
const table = [...peaks, ...canyons];
console.log(table.join(', '));

// 配列の要素を反転
// reverseメソッドは配列の内容を書き換えてしまうため、スプレッド構文で配列のコピーを作成する
const reversePeaks = [...peaks].reverse();
console.log(reversePeaks.join(', '));
