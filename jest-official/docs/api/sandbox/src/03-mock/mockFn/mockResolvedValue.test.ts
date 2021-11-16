/**
 * mockFn.mockResolvedValue(value) は、以下のシンタックスシュガー。
 *
 * jest.fn().mockImplementation(() => Promise.resolve(value));
 */

test('mockResolvedValue', () => {
  const mockFunc = jest.fn().mockResolvedValue('value');

  return expect(mockFunc()).resolves.toMatch('value');
});
