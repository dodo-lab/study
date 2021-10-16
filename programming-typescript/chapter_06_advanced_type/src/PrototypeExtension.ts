// Arrayプロトタイプにzipメソッドを追加する

// TypeScriptにzipメソッドの拡張を伝える
interface Array<T> {
  zip<U>(list: U[]): [T, U][];
}

// zipメソッドの実装
Array.prototype.zip = function (list) {
  return this.map((v, k) => [v, list[k]]);
};
