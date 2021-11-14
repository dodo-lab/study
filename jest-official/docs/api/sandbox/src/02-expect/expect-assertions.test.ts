/**
 * expect.assertions(number)は、テスト中に特定の数だけアサーションが呼び出されたことを確認する。
 * 非同期のコードをテストする際は、コールバック内のアサーションが確実に呼ばれたかチェックすべき。
 */

type Callback = () => void;
function doAsync(...callbacks: Callback[]) {
  const promises: Promise<void>[] = [];

  for (const cb of callbacks) {
    promises.push(
      new Promise<void>((resolve) => {
        setTimeout(() => {
          cb();
          resolve();
        }, 10);
      })
    );
  }

  return Promise.all(promises);
}

test('expect.assertions', () => {
  expect.assertions(2);

  function callback1() {
    expect(true).toBeTruthy();
  }

  function callback2() {
    expect(true).toBeTruthy();
  }

  return doAsync(callback1, callback2);
});
