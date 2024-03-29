const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

  },
  mode: 'development',
  devtool: 'inline-source-map',
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  
};