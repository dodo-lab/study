/**
 * mockFn.moRestore() は、mockReset()が行うことをすべて実施する。
 * 更にモックする前の状態に復元する。
 */

test('mockRestore', () => {
  const mockedDateNow = jest.spyOn(Date, 'now').mockReturnValue(999);

  expect(Date.now()).toBe(999);

  mockedDateNow.mockRestore();

  // jest.spyOn が解消されている
  expect(Date.now()).not.toBe(999);
});
