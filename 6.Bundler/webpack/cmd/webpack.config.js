var autoprefixer = require('autoprefixer');

module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  // externals: {
  //   // require("jquery") 是引用自外部模块的
  //   "jquery": "$" // 对应全局变量 jQuery
  // },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};
