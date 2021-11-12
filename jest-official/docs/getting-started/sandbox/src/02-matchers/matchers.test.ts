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
