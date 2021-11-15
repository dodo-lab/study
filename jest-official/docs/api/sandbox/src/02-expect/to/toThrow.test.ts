/**
 * toThrow(error?) は、関数呼び出しによってエラーがスローされたかを検証する。
 * それだけでなく、次の項目も検証する。
 * 1. エラーメッセージが指定の正規表現パターンにマッチするか検証
 * 2. エラーメッセージが指定の文字列を含むか検証
 * 3. エラーメッセージが指定のオブジェクトのmessageプロパティと一致しているか検証
 * 4. 指定のエラーオブジェクトの型が一致しているか検証
 *
 * また、toThrowErrorという別名の関数もある。
 */

class DisgustingFlavorError extends Error {}

function drinkFlavor(flavor: string) {
  if (flavor === 'octopus') {
    throw new DisgustingFlavorError('yuck, octopus flavor');
  }
}

function drinkOctopus() {
  drinkFlavor('octopus');
}

test('toThrow', () => {
  expect(drinkOctopus).toThrow();
  expect(drinkOctopus).toThrowError(/yuck/);
  expect(drinkOctopus).toThrowError('yuck');
  expect(drinkOctopus).toThrowError(/^yuck, octopus flavor$/);
  expect(drinkOctopus).toThrowError(new Error('yuck, octopus flavor'));
  expect(drinkOctopus).toThrowError(DisgustingFlavorError);
});
