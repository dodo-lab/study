/**
 * expect.objectContaining(object) は、受け取ったオブジェクトが期待されるオブジェクトと再帰的に一致するか検証する。
 * 期待されるオブジェクトのプロパティには、expect.anything()やexpect.any()のようなマッチャーを使用可能。
 *
 * ただし、本テストはTypeScriptの型定義で担保できる領域のため、あまり意味がない。
 */

type Args = {
  [K in string]: any;
};

function simulatePress(callback: (args: Args) => void) {
  callback({ x: 10, y: 20, target: 'div' });
}

test('expect.objectContaining', () => {
  const onPress = jest.fn();
  simulatePress(onPress);
  expect(onPress).toBeCalledWith(
    expect.objectContaining({
      x: expect.any(Number),
      y: expect.any(Number),
    })
  );
});
