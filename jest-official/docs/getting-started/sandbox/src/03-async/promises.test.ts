import { fetchResolve, fetchReject } from './../fetch';

describe('Promises', () => {
  // テストコードが Promise を返すと、jest はそのpromiseがresolveされるまで待機する
  // もしくは、promiseがrejectされたらテストを失敗として扱う

  test('promise resolve', () => {
    return fetchResolve().then((data) => {
      expect(data).toMatch(/abehiroshi/);
    });
  });

  test('promise reject', () => {
    // 想定した数のアサーションが呼ばれることを確認
    expect.assertions(1);
    return fetchReject().catch((e) => {
      expect(e).toMatch('not found');
    });
  });

  // .resolves / .rejects のマッチャを使うことで以下のような記述も可能（テスト内容自体は上記2件のテストと同様）
  test('resolvesマッチャ', () => {
    return expect(fetchResolve()).resolves.toMatch(/abehiroshi/);
  });

  test('rejectsマッチャ', () => {
    return expect(fetchReject()).rejects.toMatch('not found');
  });
});
