describe('コールバック', () => {
  /*
  test('テストケースのミス', () => {
    function callback() {
      // 失敗するはずだが、非同期で実行されるためこのテストでjestが検知してくれない
      // タイミング次第では後続のテストに影響する可能性あり
      expect(1).toBe(2);
    }

    setTimeout(callback, 10);
  });
  */

  test('doneでテストの完了タイミングをjestに通知', (done) => {
    function callback() {
      expect(1 + 1).toBe(2);
      done();
    }

    setTimeout(callback, 10);
  });
});
