const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
let PrettierPlugin = require("prettier-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),

};
const PAGES_DIR = path.resolve(__dirname, '../src/pages');
const PAGES = fs.readdirSync(PAGES_DIR);

module.exports = {

  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
    vendors: [
      "webpack-material-design-icons"
    ]

  },
  output: {
    filename: `[name].[hash].js`,
    path: PATHS.dist,
  },

  module: {
    rules: [{
      test: /\.pug$/,
      loader: 'pug-loader',

    },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',

        },


      },
      {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    },

      {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/fonts'

      }
    },
      {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true }

        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true,
            config: { path: `./postcss.config.js` } }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `./postcss.config.js` } }
        }
      ]
    }]
  },
  resolve: {
    alias: {
      '~': PATHS.src,

    }
  },
  plugins: [
    new PrettierPlugin(),
    new MiniCssExtractPlugin({
      filename: `[name].[hash].css`,
    }),
    // new CleanWebpackPlugin(),
    ...PAGES.map((page) => new HtmlWebpackPlugin({
      filename: `${page}.html`,
      template: `${PAGES_DIR}/${page}/${page}.pug`,
    })),
    new CopyWebpackPlugin([
      //
      { from: `${PATHS.src}/pages/landing/img`, to: `assets/img` },
      { from: `${PATHS.src}/pages/registration/img`, to: `assets/img` },
      { from: `${PATHS.src}/pages/room-details/img`, to: `assets/img` },

      { from: `${PATHS.src}/fonts/`, to: `assets/fonts` },

      { from: `${PATHS.src}/static`, to: 'assets/static' },
    ]),



  ],
};
