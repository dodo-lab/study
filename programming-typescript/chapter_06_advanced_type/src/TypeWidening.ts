export default function TypeWidening() {
  console.log('[型の拡大]');

  // 拡大されない型をletやvarの変数に代入すると、TypeScriptはそれを拡大する
  {
    const a = 'x'; // 'x'
    let b = a; // string

    // 明示的な型アノテーションを追加することで、上記の型の拡大を防げる
    const c: 'x' = 'x'; // 'x'
    let d = c; // 'x'
  }

  // nullまたがundefinedで初期化された変数はanyに拡大される
  {
    let a = null; // any
    a = 3; // any
    a = 'b'; // any

    // ただし、宣言されたスコープを抜けると、TypeScriptが明確な型に割り当てる
    function x() {
      let b = null; // any
      b = 3; // any
      b = 'b'; // any
      return b;
    }
    x(); // string
  }
}
