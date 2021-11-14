/**
 * expect.any(constructor)は、与えられたコンストラクタで生成されたもの全てに一致する。
 * TypeScriptでは型定義があるため、このパターンは有用とは思えない。
 */

function randomCall(callback: (number) => void) {
  return callback(Math.floor(Math.random() * 6 + 1));
}

test('expect.any', () => {
  const mock = jest.fn();
  randomCall(mock);
  expect(mock).toBeCalledWith(expect.any(Number));
  expect(1 + 2).toEqual(expect.any(Number));
});
