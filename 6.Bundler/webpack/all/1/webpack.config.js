var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 该插件使CSS单独打包成一个文件：sudo npm install extract-text-webpack-plugin

module.exports = {
  entry: "./entry.js",
  output: {
    path: "./assets",
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015'] // es6转es5 依赖 babel-preset-es2015，而jsx转es5 依赖 babel-preset-react，详见 https://www.npmjs.com/package/babel-loader
        }
      },{
        test: /\.coffee$/,
        loader: 'coffee-loader'
      },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?browsers=last 2 versions")
      },{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader?browsers=last 2 versions!less-loader")
      },{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'image?{bypassOnDebug: true, progressive:true, \
                optimizationLevel: 3, pngquant:{quality: "65-80"}}',
          'url?limit=10000&name=img/[hash:8].[name].[ext]'
        ]
      }
    ]
  },
  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
};
