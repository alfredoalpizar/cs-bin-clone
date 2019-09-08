const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'client', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  resolve: { extensions: ['.jsx', '.js'] },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    publicPath: '/build',
    compress: true,
    port: 8080,
  },
};
