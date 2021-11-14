import { timerGame, infinityTimerGame } from './timer';

beforeEach(() => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
});

afterEach(() => {
  jest.useRealTimers();
});

describe('タイマーモック', () => {
  test('すべてのタイマーを実行', () => {
    const callback = jest.fn();

    timerGame(callback);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
    expect(callback).toBeCalledTimes(0);

    jest.runAllTimers();

    expect(callback).toBeCalledTimes(1);
  });
});
