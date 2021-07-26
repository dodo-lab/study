const path = require('path');

module.exports = {
  // Entry
  entry: './src/js/app.js',

  // Output
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
};
