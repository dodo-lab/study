const path = require('path');

module.exports = {
  // Entry
  entry: './src/js/app.js',

  // Output
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css']
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    historyApiFallback: true,
    port: 3000
  },
};
