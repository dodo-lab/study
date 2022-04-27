// '.eslintrc.js'の'globals'で、'writable'指定した変数は読み書き可能.
writableGlobal = null;
const _writableGlobal = writableGlobal;

// '.eslintrc.js'の'globals'で、'readonly'指定した変数は読み込みのみ可能.
readonlyGlobal = null;
const _readonlyGlobal = readonlyGlobal;

// '.eslintrc.js'の'globals'で、Promiseを'off'に設定したため使用不可.
const promise = Promise.resolve();
