describe('一般的なマッチャー', () => {
  test('厳密な等価(===)', () => {
    expect(2 + 2).toBe(4);
  });

  test('オブジェクトの値を確認', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  test('否定', () => {
    for (let i = 1; i < 10; i++) {
      expect(i).not.toBe(0);
    }
  });
});

describe('真偽値', () => {
  test('null', () => {
    const n = null;
    expect(n).toBe(null);
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  test('0', () => {
    const n = 0;
    expect(n).toBe(0);
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  test('true', () => {
    const n = true;
    expect(n).toBe(true);
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).toBeTruthy();
    expect(n).not.toBeFalsy();
  });
});

describe('数値', () => {
  test('2 + 2', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBeLessThanOrEqual(4);

    // toBeとtoEqualは、数値の場合は同じ動きになる
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('丸め誤差', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); ★丸め誤差が原因で失敗する
    expect(value).toBeCloseTo(0.3);
  });
});
