export default function FunctionAdvancedType() {
  console.log('[関数にまつわる高度な型]');

  // タプルについての型推論の改善
  {
    const a = [1, true]; // (number | boolean)[]

    function tuple<T extends unknown[]>(...ts: T): T {
      return ts;
    }

    const b = tuple(1, true); // [number, boolean]
  }

  // ユーザー定義型ガード
  {
    function isString(a: unknown): boolean {
      return typeof a === 'string';
    }

    function parseInput(input: string | number) {
      let formattedInput: string;
      if (isString(input)) {
        // ★エラー：inputがstring型に絞り込まれていない（string型に絞り込まれているのは、isString内だけ）
        // formattedInput = input.toUpperCase();
      }
    }

    // isStringの戻り値がtrueである場合は、引数がstringであることを型チェッカーに伝える必要がある。
    // この場合、trueが返るとaはstring型、falseが返るとaはstring型以外と型チェッカーに判断される。
    function isString2(a: unknown): a is string {
      return typeof a === 'string';
    }

    function parseInput2(input: string | number) {
      let formattedInput: string;
      if (isString2(input)) {
        formattedInput = input.toUpperCase();
      }
    }
  }
}
