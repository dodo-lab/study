# JavaScript Runtime | React Native Docs

## [Timers](https://reactnative.dev/docs/timers)

React Native は Web ブラウザと同様のタイマーを実装している。

- setTimeout / clearTimeout
- setInterval / clearInterval
- setImmediate / clearImmediate
- requestAnimationFrame / cancelAnimationFrame

`requestAnimationFrame(fn)`は`setTimeout(fn, 0)`と同じではない。前者はすべてのフレームがフラッシュされた後に実行される。後者は可能な限り早く実行される。

`setImmediate`は、現在の JavaScript の実行ブロックの最後（バッチされたレスポンスをネイティブに送り返す直前）に実行される。`setImmediate`コールバックの中で`setImmediate`を呼び出すと、すぐに実行される。その間、ネイティブには返らないことに注意。

## [Hermes を使用する](https://reactnative.dev/docs/hermes)

Hermes は、React Native に最適化されたオープンソースの JavaScript エンジン。Hermes を有効にすることで、起動時間の短縮／メモリ使用量の削減／アプリサイズの縮小に繋がる。

- React Native とのバージョン整合

  Hermes の各バージョンは、特定の React Native のバージョンを対象としている。[Hermes のリリース](https://github.com/facebook/hermes/releases) を確認し、バージョン不一致が起きないよう注意。

- Windows 環境準備

  Hermes は、[Microsoft Visual C++ 2015 Redistributable](https://www.microsoft.com/ja-jp/download/confirmation.aspx?id=48145)が必要。

### Hermes の有効化

#### Android

1. `android/app/build.gradle`を編集する。

   ```js
   project.ext.react = [
     entryFile: "index.js",
   -   enableHermes: false  // clean and rebuild if changing
   +   enableHermes: true  // clean and rebuild if changing
   ]
   ```

1. ProGuard を使用している場合、`proguard-rules.pro`に以下のルールを追加する。

   ```text
   -keep class com.facebook.hermes.unicode.** { *; }
   -keep class com.facebook.jni.** { *; }
   ```

1. アプリを一度でもビルドしている場合、ビルドをクリーンアップする。

   ```shell
   cd android && ./gradlew clean
   ```

1. アプリを起動する

   ```shell
   npx react-native run-android
   ```

#### iOS

1. `ios/Podfile`を編集する。

   ```text
   use_react_native!(
     :path => config[:reactNativePath],
     # to enable hermes on iOS, change `false` to `true` and then install pods
   -    :hermes_enabled => false
   +    :hermes_enabled => true
   )
   ```

1. Hermes の pods をインストールする

   ```shell
   cd ios && pod install
   ```

1. アプリを起動する

   ```shell
   npx react-native run-ios
   ```

### Chrome DevTools を使い、Hermes 環境をデバッグする

1. Metro サーバーを立ち上げ、エミュータもしくは実機でアプリを起動しておく
2. Chrome を起動し、[chrome://inspect](chrome://inspect) を開く
3. `Configure...`ボタンをクリックし、Metro サーバーのアドレスを追加する（通常は`localhost:8081`）
4. `Hermes React Native`と表示され、そのすぐ下の`inspect`をクリックする
