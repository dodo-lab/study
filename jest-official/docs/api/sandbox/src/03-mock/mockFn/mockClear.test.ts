/**
 * mockFn.mockClear() は、mockFn.mock.calls / mockFn.mock.results / mockFn.mock.instances を初期化する。
 * mockFn.mock自体も新しく置き換えられるため、注意。
 * mockImplementationやmockReturnValueで設定したものは初期化されない。
 */

test('mockClear', () => {
  const mockFunc = jest.fn();

  mockFunc.mockReturnValue(10);

  mockFunc('x');
  mockFunc([100, 200]);

  expect(mockFunc.mock.calls.length).toBe(2);
  expect(mockFunc.mock.calls[0][0]).toBe('x');
  expect(mockFunc.mock.calls[1][0]).toEqual([100, 200]);

  expect(mockFunc.mock.results.length).toBe(2);
  expect(mockFunc.mock.results[0].value).toBe(10);

  expect(mockFunc.mock.instances.length).toBe(2);

  mockFunc.mockClear();

  // calls, results, instances が初期化される
  expect(mockFunc.mock.calls.length).toBe(0);
  expect(mockFunc.mock.results.length).toBe(0);
  expect(mockFunc.mock.instances.length).toBe(0);

  // mockReturnValue の設定は初期化されない
  expect(mockFunc()).toBe(10);
});
