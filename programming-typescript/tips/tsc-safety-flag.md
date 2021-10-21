# 安全性に関する TSC フラグ

最新の利用可能なコンパイラフラグは、[こちら](https://www.typescriptlang.org/docs/handbook/compiler-options.html)を参照

| フラグ                       | 説明                                                                                                  |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| alwaysStrict                 | 'use strict'を出力する                                                                                |
| noEmitOnError                | コードに型エラーがある場合、JavaScript を出力しない                                                   |
| noFallthroughCasesInSwitch   | すべての switch の case が値を返しているか、または break していることを確認する                       |
| noImplicitAny                | 変数の型が any と推論される場合、エラーとする                                                         |
| noImplicitReturns            | すべての関数内のすべてのコードパスが明示的に return していることを確認する                            |
| noUnusedLocals               | 使われていないローカル変数について警告する                                                            |
| noUnusedParameters           | 使われていない関数パラメータについて警告する。このエラーを無視するには、パラメータ名の前に`_`を付ける |
| strictBindCallApply          | bind、call、apply に対して型安全を強制する                                                            |
| strictFunctionTypes          | 関数がそのパラメータおよび this 型に関して反変であることを強制する                                    |
| strictNullChecks             | null を型に昇格させる                                                                                 |
| strictPropertyInitialization | クラスのプロパティが null 許容であるか、または初期化されていることを強制する                          |
