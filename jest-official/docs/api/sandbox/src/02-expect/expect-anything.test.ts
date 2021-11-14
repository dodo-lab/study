/**
 * expect.anything()は、null / undefined を除くすべてに一致する。
 * toEqual または toBeCalledWith の内側でリテラル値の代わりに使用できる。
 */

test('expect-anything', () => {
  const mock1 = jest.fn();
  const mock2 = jest.fn();
  const mock3 = jest.fn();
  const mock4 = jest.fn();
  const mock5 = jest.fn();

  mock1('a');
  mock2(100);
  mock3(true);
  mock4(null);
  mock5(undefined);

  expect(mock1).toBeCalledWith(expect.anything());
  expect(mock2).toBeCalledWith(expect.anything());
  expect(mock3).toBeCalledWith(expect.anything());
  expect(mock4).not.toBeCalledWith(expect.anything());
  expect(mock5).not.toBeCalledWith(expect.anything());
});
