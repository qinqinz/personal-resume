### personal-resume
## 一、webpack使用
#### 1、 npm install babel-loader babel-core --save-dev   es6    https://babeljs.io
####  npm install --save-dev babel-preset-latest 指定preset  可在package.json 中指定
```
module: {
loaders(rules): [{test: /\.js$/, loader(use):'babel'}]
}
```

require  commonJs语法
#### www.npmjs.com 查阅资料  https://github.com/webpack-china/awesome-webpack-cn
##### 2、先安装postcss-loader  安装 autoprefixer   自动加浏览器前缀
（1）css-loader?importLoaders=1 解决.css文件顶部通过import进来的css文件。
（2）loader顺序   style-loader!css-loader!postcss-loader!less-loader     loader可以省略

webpack template 查阅相关资料
#### 3、npm install html-loader --save-dev  引入html模块

#### 4、npm install file-loader --save-dev  打包图片
  ```
  {
  test: /\.(png | jpg | gif | svg )$/,
  loader: 'file-loader',
  query: { name: '图片名'}
  }
  ```
  html引用相对图片地址 ${require('../../xxx.png')}
  
#### 5、 npm install url-loader --save-dev  安装url-loader 处理文件、图片大小 ， base64 or http请求，小于一定大小的图片转成base64
```
  {
  test: /\.(png | jpg | gif | svg )$/,
  loader: 'url-loader',
  query: { name: '图片名'，limit:20000}
  }
  ```
#### 6、npm install img-webpack-loader --save-dev  压缩图片  http://github.com/tcoopman/image-webpack-loader
 
 ```
   {
   test: /\.(png | jpg | gif | svg )$/,
   loaders:[ 'url-loader?limit=20000', image-webpack]
   }
   ```
   
#### 7、npm install webpack-dev-server --save-dev 在服务器上运行项目
   package.json 
   ``` 
    "server": "webpack-dev-server --devtool eval-source-map --progress --colors --hot --inline --content-base ./dist"
   ```
  

  
  

