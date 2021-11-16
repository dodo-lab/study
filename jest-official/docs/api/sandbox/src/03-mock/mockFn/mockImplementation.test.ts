/**
 * mockFn.mockImplementation(fn) は、モックの実装として使用する関数を受け取り、
 * モックがコールされた時に受け取った関数を実行する。
 *
 * jest.fn(implementation) は省略形
 */

test('mockImplementation', () => {
  const mockFunc = jest.fn().mockImplementation((scalar) => scalar + 99);

  const a = mockFunc(0);
  const b = mockFunc(1);

  expect(a).toBe(99);
  expect(b).toBe(100);
});
