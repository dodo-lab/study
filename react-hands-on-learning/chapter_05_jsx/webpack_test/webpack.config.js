var path = require('path');

module.exports = {
  // エントリファイル（このファイルを起点として、import文から連鎖的にバンドルに追加していく）
  entry: './src/index.js',
  // バンドルファイルの出力先を指定
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // 処理対象のファイル
        test: /\.js$/,
        // 除外するファイル
        exclude: /node_modules/,
        // 利用するローダー
        loader: 'babel-loader',
      },
    ],
  },
  // ソースマップ（バンドル化されたコードと元コードの間で行番号をマッピングするための情報）
  // bundle.js.mapを出力し、ChromeのDevToolの[Source]タブに「webpack://」が表示されるため、そこからデバッグできる
  devtool: 'source-map',
};
