/**
 * .toHaveBeenLastCalledWith(arg1, arg2, ...) は、最後にコールした引数をチェックする
 */

test('toHaveBeenLastCalledWith', () => {
  const mock = jest.fn();

  mock('x');
  expect(mock).toHaveBeenLastCalledWith('x');
  mock(100);
  expect(mock).toHaveBeenLastCalledWith(100);
});
