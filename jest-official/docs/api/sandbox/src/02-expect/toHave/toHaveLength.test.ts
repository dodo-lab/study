/**
 * .toHaveLength(number) は、オブジェクトが '.length' プロパティを持ち、特定の数値かどうか検証する。
 * 配列や文字列のサイズを確認するのに有用。
 */

test('toHaveLength', () => {
  expect([1, 2, 3]).toHaveLength(3);
  expect('abc').toHaveLength(3);
  expect('').not.toHaveLength(5);
});
