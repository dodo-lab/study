/**
 * toStrictEqual(value) は、オブジェクトの型や構造か同じか検証する。
 *
 * toEqualとの相違点は次の通り。
 * 1. 未定義のプロパティを持つキーをチェックする。例えば、{a: undefined, b: 2} は {b: 2} と一致しない。
 * 2. 疎な配列かチェックする。例えば、[, 1] は [undefined, 1] と一致しない。
 * 3. オブジェクトのタイプをチェックする。例えば、フィールド aとb を持つクラスインスタンスは、フィールド aとb を持つリテラルオブジェクトとは一致しない。
 */

class LaCroix {
  constructor(private flavor) {}
}

test('toStrictEqual', () => {
  expect(new LaCroix('レモン')).toEqual({ flavor: 'レモン' });
  expect(new LaCroix('レモン')).not.toStrictEqual({ flavor: 'レモン' });
});
