# 型演算子

|型演算子|構文|仕様対象|
|---|---|---|
|型クエリー|typeof、instanceof|任意の型|
|キー|keyof|オブジェクト型|
|プロパティの取得|O[K]|オブジェクト型|
|マップ型|[K in O]|オブジェクト型|
|修飾子の付加|+|オブジェクト型|
|修飾子の削除|-|オブジェクト型|
|読み取り専用修飾子|readonly|オブジェクト型、配列型、タプル型|
|オプション修飾子|?|オブジェクト型、タプル型、関数のパラメータ型|
|条件型|?|ジェネリック型、型エイリアス、関数のパラメータ型|
|非nullアサーション|!|null許容型|
|ジェネリック型パラメータのデフォルトの型|=|ジェネリック型|
|型アサーション|as、<>|任意の型|
|型ガード|is|関数の戻り値の型|
