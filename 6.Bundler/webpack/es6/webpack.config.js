module.exports = {
  entry: "./entry.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference 
        query: {
          presets: ['es2015'] // es6转es5 依赖 babel-preset-es2015，而jsx转es5 依赖 babel-preset-react，详见 https://www.npmjs.com/package/babel-loader
        }
      }
    ]
  }
};