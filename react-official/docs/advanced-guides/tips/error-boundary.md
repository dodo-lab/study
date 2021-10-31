# Error Boundary

Error Boundary は自身の子コンポーネントツリーで発生した JavaScript エラーをキャッチするコンポーネント。その際に、エラーの記録とクラッシュしたコンポーネントツリーの代わりにフォールバック用の UI を表示する。

※詳細は[公式](https://ja.reactjs.org/docs/error-boundaries.html)を参照

- キャッチ対象のエラー

  - レンダー中
  - ライフサイクルメソッド内
  - コンストラクタ内

- キャッチ対象外のエラー

  - イベントハンドラ
  - 非同期コード（例：`setTimeout`や`requestAnimationFrame`のコールバック）
  - サーバサイドレンダリング
  - Error Boundary 自身がスローしたエラー

## Error Boundary の使用方法

クラスコンポーネントに、ライフサイクルメソッドの`static getDerivedStateFromError()`か`componentDidCatch()`のいずれか（または両方）を定義すると、Error Boundary になる。

- static getDerivedStateFromError()

  エラーがスローされた後、フォールバック UI をレンダーするために使用。

- componentDidCatch()

  エラー情報をログに記録するために使用。

実装内容は[こちら](./../sandbox/src/pages/error-boundary/)を参照。

## エラーがキャッチされなかった場合の動作

React16 から、どの Error Boundary でもエラーがキャッチされなかった場合に React コンポーネントツリー全体がアンマウントされるようになった。
