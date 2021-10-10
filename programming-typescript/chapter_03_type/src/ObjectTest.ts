export default function ObjectTest() {
  console.log('[object]');
  let a: {
    b: number; // 'a'はnumber型のプロパティ'b'を持つ
    c?: string; // 'a'はstring型のプロパティ'c'を持つ可能性がある。
    [key: number]: boolean; // 'a'はboolean型の数値プロパティを任意の数だけ持てる（インデックスシグネチャ）
  };

  a = { b: 1 };
  a = { b: 1, c: undefined };
  a = { b: 1 };
  a = { b: 1, c: 'd' };
  a = { b: 1, 10: true };
  a = { b: 1, 10: true, 20: false };
  // 以下はエラー
  // a = { 10: true };
  // a = { b: 1, 33: 'red' };

  console.log(a);
}
