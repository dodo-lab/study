# JavaScript Runtime | React Native Docs

## [Timers](https://reactnative.dev/docs/timers)

React Native は Web ブラウザと同様のタイマーを実装している。

- setTimeout / clearTimeout
- setInterval / clearInterval
- setImmediate / clearImmediate
- requestAnimationFrame / cancelAnimationFrame

`requestAnimationFrame(fn)`は`setTimeout(fn, 0)`と同じではない。前者はすべてのフレームがフラッシュされた後に実行される。後者は可能な限り早く実行される。

`setImmediate`は、現在の JavaScript の実行ブロックの最後（バッチされたレスポンスをネイティブに送り返す直前）に実行される。`setImmediate`コールバックの中で`setImmediate`を呼び出すと、すぐに実行される。その間、ネイティブには返らないことに注意。
