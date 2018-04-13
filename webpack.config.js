const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'client', 'app', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'src', 'client', 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: path.join(__dirname, 'src', 'client', 'app'),
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src', 'client', 'public'),
    compress: true,
    port: 8080
  }
};