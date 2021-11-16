/**
 * mockImplementationOnce(fn) は、モック関数のコール１回分の実装を設定する。
 * モック関数の複数回コールに対して、異なる結果が返せるようにチェーンすることも可能。
 */

test('mockImplementationOnce', () => {
  const mockFunc = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first')
    .mockImplementationOnce(() => 'second');

  expect(mockFunc()).toMatch('first');
  expect(mockFunc()).toMatch('second');
  expect(mockFunc()).toMatch('default');
});
