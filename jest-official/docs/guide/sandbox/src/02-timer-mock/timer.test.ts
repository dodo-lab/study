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

  /**
   * infinityTimerGameのように再帰的なタイマー処理をしている場合、'jest.runAllTimers()'をコールすると無限ループに陥ってしまう
   * そのようなケースでは、'jest.runOnlyPendingTimers()'で待機中のタイマーのみを処理するべき
   */
  test('待機中のタイマーのみ実行', () => {
    const callback = jest.fn();
    infinityTimerGame(callback);

    expect(callback).toBeCalledTimes(0);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);

    jest.runOnlyPendingTimers();

    expect(callback).toBeCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 10000);
  });

  test('指定した時間でタイマーを進める', () => {
    const callback = jest.fn();
    timerGame(callback);

    expect(callback).toBeCalledTimes(0);

    jest.advanceTimersByTime(999);
    expect(callback).toBeCalledTimes(0);

    jest.advanceTimersByTime(1);
    expect(callback).toBeCalledTimes(1);
  });
});
