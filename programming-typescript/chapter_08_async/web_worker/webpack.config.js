const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'dist/client': './src/MainThread.ts',
    'dist/worker': './src/WorkerScript.ts',
    'dist/matrix-worker': './src/MatrixWorkerScript.ts',
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
