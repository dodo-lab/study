# Workflow | React Native Docs

## [Android 実機でアプリを実行する](https://reactnative.dev/docs/running-on-device#running-your-app-on-android-devices)

1. Android 実機の「開発者向けオプション」を有効にする

   「設定」→「デバイス情報」の下部にある「ビルド番号」を７回タップすると、「開発者向けオプション」が有効になる。

1. Android 実機の「USB デバッグ」を有効にする

   「設定」→「システム」にある「開発者向けオプション」を開く。
   「USB デバッグ」を有効にする。

1. PC に Android 実機を USB 接続する

   接続した後、`adb devices`を実行し、Android 実機が ADB(Android Debug Bridge)に接続されていることを確認する。

   ```shell
   $ adb devices
   List of devices attached
   emulator-5554 offline   # Google emulator
   14ed2fcc device         # Physical device
   ```

1. アプリを実行する

   Android 実機にアプリをインストールして起動するには、次のように実行する。

   ```shell
   npx react-native run-android

   # もし 'react-native init' で作成したプロジェクトであれば、下記でもOK
   npm run android
   ```

   Release ビルドで実行するなら、次のように実行する。

   ```shell
   npx react-native run-android --variant=release

   # もし 'react-native init' で作成したプロジェクトであれば、下記でもOK
   npm run android -- --variant=release
   ```

## Debugging

### [Chrome Dev Tools](https://reactnative.dev/docs/debugging#chrome-developer-tools)

開発者メニューから「Debug」を選択すると、[React Native Debugger](http://localhost:8081/debugger-ui) が開く。

開発者メニューを開くには、以下いずれかの方法がある。

- エミュレータ：Ctrl + M
- 実機：実機を振る（シェイクする）

`React Native Debugger`のページ上で、Chrome Dev Tools を開くことで以下のような Web と同様のデバッグが可能になる。

- 出力ログの解析
- ブレークポイントを張ったデバッグ
- 例外キャッチ時の一時停止
- etc

ソースマップにより tsx ファイルもそのままデバッグ可能。Chrome Dev Tools 上から`Ctrl + P`でソース検索すると、該当ファイルが探しやすい。

### [React Developer Tools](https://reactnative.dev/docs/debugging#chrome-developer-tools)

React Developer Tools のスタンドアロン版を使って、React コンポーネントツリーをデバッグすることが可能。React Developer Tools のスタンドアロン版は`react-devtools`パッケージのグローバルインストールで使用できる。

```shell
npm install -g react-devtools
```

次にターミナルから`react-devtools`を実行すると、React Developer Tools のスタンドアロン版が起動する。

```shell
react-devtools
```

起動後、React コンポーネントツリーが表示されない場合がある。その時は開発者メニューを開くことで、デバッグ対象に接続し、React コンポーネントツリーが表示される。
