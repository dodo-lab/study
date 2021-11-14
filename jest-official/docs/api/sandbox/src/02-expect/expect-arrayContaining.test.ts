/**
 * expect.arrayContaining(array)は、受け取った配列が期待される配列の要素を全て含むか検証する。
 *
 * [利用箇所]
 * - toEqual / toBeCalledWith の引数
 * - objectContaining / toMatchObject のプロパティとマッチさせる場合
 */

describe('expect.arrayContaining', () => {
  const expected = ['Alice', 'Bob'];
  it('toEqual', () => {
    expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
  });
  it('not toEqual', () => {
    expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
  });
});
