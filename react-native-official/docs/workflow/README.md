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
