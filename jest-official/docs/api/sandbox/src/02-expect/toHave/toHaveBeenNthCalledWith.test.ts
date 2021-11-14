/**
 * .toHaveBeenNthCalledWith(nthCall, arg1, arg2, ...) は、N 回目にコールした引数をチェックする
 */

test('toHaveBeenNthCalledWith', () => {
  const mock = jest.fn();

  mock('x');
  mock(100);

  expect(mock).toHaveBeenNthCalledWith(1, 'x');
  expect(mock).toHaveBeenNthCalledWith(2, 100);
});
