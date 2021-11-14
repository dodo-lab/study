/**
 * .toHaveReturnedTimes(number) は、モック関数が指定した回数だけ正しく帰ったことを検証する。
 * モック関数で例外が発生した場合は回数をカウントしない。
 */

test('toHaveReturnedTimes', () => {
  const mock = jest.fn(() => true);

  mock();
  mock();

  expect(mock).toHaveReturnedTimes(2);
});
