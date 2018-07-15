const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const IS_PRODUCTION = (
  process.argv.indexOf('-p') >= 0
  || process.env.NODE_ENV === 'production'
);

module.exports = {
  entry: './app/main.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },{
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ],
      },{
        type: 'javascript/auto',
        test: /\.png|mp3|json$/,
        use: [
          { loader: "file-loader" }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  optimization: {
    minimizer: [
      IS_PRODUCTION && new UglifyJsPlugin()
    ].filter((x) => x)
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ].filter((x) => x),
};
