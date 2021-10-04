# ESLint

## インストール

```sh
npm i eslint -D
```

## 設定ファイルの自動生成

```sh
npx eslint --init

# 実行例
How would you like to use ESLint?
> To check syntax and find problems

What type of modules does your project use?
> JavaScript modules (import/export)

Which framework does your project use?
> React

Does your project use TypeScript?
> No

Where does your code run?
√ Browser

What format do you want your config file to be in?
> JSON

Would you like to install them now with npm?
> Yes
```

## 実行

```sh
# ファイル単位
npx eslint XXXXX.js

# 実行ディレクトリ配下すべて
npx eslint .
```
