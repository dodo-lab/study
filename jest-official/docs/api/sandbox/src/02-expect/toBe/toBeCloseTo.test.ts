/**
 * .toBeCloseTo(number, numDigits?) は、浮動小数点を近似的な等価性で検証する。
 */

test('toBeCloseTo', () => {
  // 0.1 + 0.2 は JavaScriptの計算上では 0.30000000000000004 のため、失敗する
  // expect(0.1 + 0.2).toBe(0.3);

  // 例えば、このテストは小数点以下5桁の精度でパスされる
  expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
});
