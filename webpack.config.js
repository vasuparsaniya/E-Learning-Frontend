const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const dotenv = require('dotenv');

/**dotenv-webpack package replace static value of env variable during build time
 * run-time value not get from env
 * without use of this runtime env variable value get
 */
// const Dotenv = require('dotenv-webpack');
// const dotenvFilename = '.env.development';

// Load environment variables from .env file
const env =
  dotenv.config({ path: path.resolve(__dirname, '.env.development') }).parsed ||
  {};

// Convert it to be used with DefinePlugin
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

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
    // new Dotenv({
    //   // path: dotenvFilename,
    //   path: path.resolve(__dirname, dotenvFilename), // specify your env file
    // }),
    new webpack.DefinePlugin(envKeys),
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
