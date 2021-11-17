/**
 * useFakeTimers() は、Jestに標準的なタイマー関数を偽装するように指示する。
 * 標準的なタイマー関数は以下のとおり。
 *
 * - setTimeout
 * - setInterval
 * - clearTimeout
 * - clearInterval
 * - nextTick
 * - setImmediate
 * - clearImmediate
 * - Date
 */

function timerCallback(callback: () => void) {
  setTimeout(callback, 1000);
}

test('useFakeTimers', () => {
  jest.useFakeTimers();

  const mockFunc = jest.fn();

  timerCallback(mockFunc);
  expect(mockFunc).not.toHaveBeenCalled();

  jest.advanceTimersByTime(999);
  expect(mockFunc).not.toHaveBeenCalled();

  jest.advanceTimersByTime(1);
  expect(mockFunc).toHaveBeenCalled();
});
