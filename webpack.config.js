const path = require('path');
/* xóa output folder trc khi build */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
/* tách module lib ra file riêng */
const nodeExternals = require('webpack-node-externals');

const plugins = [
  /* xóa output folder trc khi rebuild */
  new CleanWebpackPlugin(),
];

module.exports = {
  /** khai báo bundle for node (ko phải front-end)*/
  target: 'node',
  /**
   * khai báo mode development or production ở commandline build
   * xem file package.json script{}
   */
  entry: {
    app: './src/index.ts',
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: plugins,
  /**
   *  exclude node_modules lib khỏi *.bundle.js file ở output
   *  nếu bỏ phần này thì lib sẽ đc add vào *.bundle.js file
   */
  externals: [nodeExternals()],
};
