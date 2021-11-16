/**
 * mockFn.mockReset() は、mockClear()で初期化されるものに加えて、
 * mockImplementationやmockReturnValueで設定したものも初期化する。
 */

test('mockReset', () => {
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

  mockFunc.mockReset();

  // calls, results, instances が初期化される
  expect(mockFunc.mock.calls.length).toBe(0);
  expect(mockFunc.mock.results.length).toBe(0);
  expect(mockFunc.mock.instances.length).toBe(0);

  // mockReturnValue の設定も初期化される
  expect(mockFunc()).not.toBe(10);
});
