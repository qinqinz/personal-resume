var path = require("path");
var webpack = require("webpack");
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './app/entry.js',
  output: {
    path: path.resolve("dist"),
    filename: '[name].js'
  //  publicPath: 'http://cdn.com/'  //设置线上地址

  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
          ]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader'
      }
    ]
  },

  plugins: [
    new htmlWebpackPlugin ({  //多页面 多个htmlWebpackPlugin
      template: 'index.html',
      filename: 'index.html',
      // inject: 'head'
      minify: {  //minify对当前生成的html文件进行压缩
       removeComments: true,  //删除注释
       collapseWhitespace: true   //删除空行
     }
    })

  ]


  
};