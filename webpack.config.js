const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SOURCE_DIR = path.join(__dirname, '/src');
const BUILD_DIR = path.join(__dirname, '/dist');

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
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SOURCE_DIR,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: SOURCE_DIR + '/images', to: 'images' } 
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: SOURCE_DIR + '/index.html'
    })
  ],
  devServer: {
    contentBase: BUILD_DIR,
    port: 8080,
    historyApiFallback: true,
  },
};
