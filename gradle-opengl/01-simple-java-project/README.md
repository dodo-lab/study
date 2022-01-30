# 簡単なJavaプロジェクトを作る

## コンパイル

```bash
gradle compileJava
```

## 実行

先にコンパイルをしておくこと。

```bash
java -cp .\build\classes\java\main sample.gradle.GradleMain
```

## コンパイルで生成したファイルを削除

```bash
gradle clean
```

## タスクを複数指定

`clean`を実行してから、`compileJava`が実行される。

```bash
gradle clean compileJava
```

## runタスクで実行するMainクラスに引数を渡す

```bash
gradle run --args="arg1 arg2"
```

## 起動用スクリプトを自動生成

WindowsとUnix用に起動用スクリプトを自動生成できる。

```bash
gradle startScripts
```

## 作成したアプリケーションをzipにまとめて出力

タスクが完了すると、`build/distributions`にzipファイルが出力される。

```bash
gradle distZip
```

## Javadocを生成

```bash
gradle javadoc
```

## テスト実行

```bash
gradle test
```
