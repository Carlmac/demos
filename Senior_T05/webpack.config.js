var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  externals: {
    'jquery': 'jQuery'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: 'url-loader?limit=10000&name=images/[hash:12].[ext]'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index-template.html'
    }),
    new ExtractTextPlugin('main.css'),
    new webpack.optimize.UglifyJsPlugin()
  ]
};