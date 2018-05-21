const webpack = require('webpack');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, "/src");
const BUILD_DIR = path.join(__dirname, "/dist");

module.exports = {
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  entry: [
    SOURCE_DIR + "/index.jsx"
  ],
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SOURCE_DIR,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: BUILD_DIR,
    port: 8080,
    historyApiFallback: true
  }
};