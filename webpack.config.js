const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",

  entry: {
    content: './src/app/content/index.js',
    background: './src/app/background/index.js',
    popup: './src/app/popup/index.tsx',
  },

  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js'
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' },
      { test: /\.css$/, use: 'css-loader' }
    ]
  },
};
