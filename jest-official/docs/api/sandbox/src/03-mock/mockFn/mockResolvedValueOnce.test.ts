/**
 * mockFn.mockResolvedValueOnce(value) は、以下のシンタックスシュガー。
 *
 * jest.fn().mockImplementationOnce(() => Promise.resolve(value));
 */

test('mockResolvedValueOnce', async () => {
  const mockFunc = jest
    .fn()
    .mockResolvedValue('default')
    .mockResolvedValueOnce('first')
    .mockResolvedValueOnce('second');

  expect(await mockFunc()).toMatch('first');
  expect(await mockFunc()).toMatch('second');
  expect(await mockFunc()).toMatch('default');
});
