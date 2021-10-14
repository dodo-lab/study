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

  // constアサーション
  {
    let a = { x: 3 }; // {x: number}
    const b = { x: 3 }; // {x: number}
    let c: { x: 3 }; // {x: 3}
    let d = { x: 3 } as const; // {readonly x: 3}

    // ネストされた構造も再帰的にreadonly指定になる
    let e = [1, { x: 2 }] as const; // readonly [1, {readonly x: 2}]
  }
}
