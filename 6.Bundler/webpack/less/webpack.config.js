module.exports = {
  entry: "./entry.less",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: "style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions!less-loader" }
    ]
  }
};