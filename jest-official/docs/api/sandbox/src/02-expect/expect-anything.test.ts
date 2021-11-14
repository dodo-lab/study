/**
 * expect.anything()は、null / undefined を除くすべてに一致する。
 * toEqual または toBeCalledWith の内側でリテラル値の代わりに使用できる。
 */

test('expect-anything', () => {
  const mock = [...Array(5)].map((_) => jest.fn());

  mock[0]('a');
  mock[1](100);
  mock[2](true);
  mock[3](null);
  mock[4](undefined);

  expect(mock[0]).toBeCalledWith(expect.anything());
  expect(mock[1]).toBeCalledWith(expect.anything());
  expect(mock[2]).toBeCalledWith(expect.anything());
  expect(mock[3]).not.toBeCalledWith(expect.anything());
  expect(mock[4]).not.toBeCalledWith(expect.anything());
});
