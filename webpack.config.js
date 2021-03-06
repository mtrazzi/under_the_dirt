var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './public/build');
var APP_DIR = path.resolve(__dirname, './src/client');

const config = {
   entry: {
     main: APP_DIR + '/index.js'
   },
   output: {
     filename: 'bundle.js',
     path: BUILD_DIR,
   },
   module: {
    rules: [
     {
       test: /(\.css|.scss)$/,
       use: [{
           loader: "style-loader" // creates style nodes from JS strings
       }, {
           loader: "css-loader" // translates CSS into CommonJS
       }, {
           loader: "sass-loader" // compiles Sass to CSS
       }]
     },
     {
       test: /\.(jsx|js)?$/,
       use: [{
         loader: "babel-loader",
         options: {
           cacheDirectory: true,
           presets: ['react', 'es2016'] // Transpiles JSX and ES6
         }
       }]
     },
     {
       test: /\.(eot|svg|ttf|woff|woff2)$/,
       use: ['file-loader'],
     },
     {
       test: /\.(png|jpg|gif)$/,
       use: {
         loader: 'file-loader',
         options: {
           name: '[name].[ext]',
           publicPath: 'assets/'
        }
      },
     }
    ],

  }
};

module.exports = config;
