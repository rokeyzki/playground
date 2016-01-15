var autoprefixer = require('autoprefixer');

module.exports = {
  entry: "./entry.less",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: "style-loader!css-loader!postcss-loader!less-loader" }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};