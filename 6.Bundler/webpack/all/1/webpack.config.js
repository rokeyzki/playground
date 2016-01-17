var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 该插件使CSS单独打包成一个文件：sudo npm install extract-text-webpack-plugin

module.exports = {
  entry: {
    mainpage: './index.entry.js',
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
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?browsers=last 2 versions") // sudo npm install style-loader css-loader autoprefixer-loader
      },{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?browsers=last 2 versions!less-loader") // sudo npm install less less-loader
      },{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url-loader?limit=10000&name=img/[hash:8].[ext]' // sudo npm install file-loader url-loader
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].min.css')
  ]
};
