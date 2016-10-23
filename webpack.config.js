var webpack = require('webpack'),
    minimize = process.argv.indexOf('--minimize') !== -1,

plugins = [
  new webpack.optimize.CommonsChunkPlugin("vendor", "./dist/vendor.bundle.js")
];

if (minimize) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: {
    "vendor": "./app/vendor",
    "app": "./app/main"
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    preLoaders: [
      {
        test: /\.ts/,
        loaders: ['tslint'],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: plugins
};
