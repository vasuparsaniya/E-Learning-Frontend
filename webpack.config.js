const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const dotenv = require('dotenv');
// dotenv.config();
const Dotenv = require('dotenv-webpack');

const dotenvFilename = '.env.development';

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
    clean: true, // cleans old build files
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // resolves these extensions
    modules: [path.resolve(__dirname, 'src'), 'node_modules'], // allow absolute imports from src
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // TypeScript + JSX
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
    new Dotenv({
      path: dotenvFilename,
    }),
  ],
  devServer: {
    hot: true,
    open: true,
    static: {
      directory: path.resolve(__dirname, 'public'),
      watch: true,
      serveIndex: false, // <--- disable serve-index
    },
    port: 3000,
    historyApiFallback: true,
  },
  mode: 'development',
};
