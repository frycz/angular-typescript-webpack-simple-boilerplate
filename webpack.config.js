const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');
module.exports = {
  /*

    No entry and output paramters needed as webpack 4 provides basic default configuration
    default entry: ./src/index.js
    default output: ./dist/main.js

    Webpack provides production and development mode.
    In production mode code is minified by default.

    "scripts": {
      "dev": "webpack --mode development",
      "build": "webpack --mode production"
    }

  */
 
  /*
  output: {
    publicPath: '/angular-typescript-webpack-simple-boilerplate/',
    path: path.join(__dirname, 'dist')
  },*/
  
  module: {
    rules: [
      {
        // ts-loader transpiles typescript to javascript
        // according to tsconfig.json configuration
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },{
        // loaders for images, sound and json
        type: 'javascript/auto',
        test: /\.png|mp3|json$/,
        use: [
          { loader: "file-loader" }
        ]
      },{
        test: /\.css$/,
        // CSS is not minified by default.
        // MiniCssExtractPlugin can be used to minify our code.
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  resolve: {
    // indicate that typescript files (ts) should be handled as modules
    alias: {
      'app': path.join(__dirname, 'src')
    },
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    // HtmlWebPackPlugin creates index.html file in ./dist directory.
    // template parameter is not required - default template will be used
    new HtmlWebPackPlugin({
      template: 'index.html'
    }),
    new MiniCssExtractPlugin(),
  ]
};
