import { forEach } from './mockFunctions';

describe('モック関数', () => {
  test('モック関数の利用', () => {
    const mockCallback = jest.fn((x) => x + 42);
    forEach([0, 5], mockCallback);

    // モック関数は2回呼び出される想定
    expect(mockCallback.mock.calls.length).toBe(2);
    // 1回目のモック関数呼び出し時の第一引数は0を想定
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    // 1回目のモック関数の戻り値は42を想定
    expect(mockCallback.mock.results[0].value).toBe(42);
    // 2回目のモック関数呼び出し時の第一引数は5を想定
    expect(mockCallback.mock.calls[1][0]).toBe(5);
    // 2回目のモック関数の戻り値は47を想定
    expect(mockCallback.mock.results[1].value).toBe(47);
  });

  test('モックの戻り値', () => {
    const myMock = jest.fn();
    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce('x')
      .mockReturnValue(true);

    expect(myMock()).toBe(10);
    expect(myMock()).toMatch('x');
    expect(myMock()).toBeTruthy();
    expect(myMock()).toBeTruthy();
  });
});
