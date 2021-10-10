# TypeScript の全体像

## TypeScript のコーディング環境構築

- npm プロジェクト作成と必要なパッケージのインストール

```shell
# 新しいフォルダを作成
mkdir project
cd project

# npmプロジェクトを初期化
npm init -y

# TSC、TSLint、Node.js用の型宣言をインストール
npm i -D typescript tslint @types/node
```

- [tsconfig.json](tsconfig.json) の作成
- tslint.json の作成

```shell
npx tslint --init
```
