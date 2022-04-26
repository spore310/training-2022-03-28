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
            test: /\.js$/, //regex
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader'
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
    plugins: [new htmlPlugin(
      {
        title: 'test',
        filename: 'index.html',
        template: 'src/index.html'
      }
    )],
  };