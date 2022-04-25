const htmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: './src/index.js',  
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.m?js$/, //regex
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', "@babel/preset-react"],
              }
            }
          },
          {
            test: /\.css$/i,
            exclude: /(node_modules|bower_components)/,
            use: ["style-loader", "css-loader"],
          }
        ]
      },
    devtool: 'source-map',
    mode: "development",
    plugins: [new HtmlWebpackPlugin(
      {
        title: 'test',
        filename: 'index.html',
        template: 'src/index.html'
      }
    )],
  };