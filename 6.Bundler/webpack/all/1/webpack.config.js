var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 插件作用：使CSS单独打包成一个文件：sudo npm install extract-text-webpack-plugin
var BannerPlugin = require('webpack/lib/BannerPlugin'); // 插件作用：给输出的文件头部添加注释信息
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin'); // 插件作用：分析模块的共用代码, 单独打包成一个文件
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin'); // 插件作用：可以使webpack不加-p命令就自动对输出的文件进行压缩，并且忽略 Warning 提示

module.exports = {
  entry: {
    mainpage: './index.entry.js',
    other: './other.entry.js'
  },
  output: {
    path: './assets',
    filename: '[name].min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // sudo npm install babel-loader babel-preset-es2015 babel-preset-react
        query: {
          presets: ['react', 'es2015'] // es6转es5 依赖 babel-preset-es2015，而jsx转es5 依赖 babel-preset-react，详见 https://www.npmjs.com/package/babel-loader
        }
      },{
        test: /\.coffee$/,
        loader: 'coffee-loader' // sudo npm install coffee-script coffee-loader
      },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 2 versions') // sudo npm install style-loader css-loader autoprefixer-loader
      },{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 2 versions!less-loader') // sudo npm install less less-loader
      },{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url-loader?hash=sha512&limit=10000&name=img/[hash].[ext]' // 第一种图片压缩方式：sudo npm install file-loader url-loader
          // 'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          // 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false' // 第二种图片压缩方式：sudo npm install file-loader image-webpack-loader
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].min.css'),
    new BannerPlugin('This file is created by Charles Lim'),
    new CommonsChunkPlugin('common.min.js'),
    new UglifyJsPlugin({compress:{warnings: false}})
  ]
};
