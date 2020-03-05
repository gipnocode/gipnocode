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

const PAGES_DIR1 = `${PATHS.src}/pages/index`;
const PAGES1 = fs.readdirSync(PAGES_DIR1).filter(fileName => fileName.endsWith('.pug'));

const PAGES_DIR2 = `${PATHS.src}/pages/landing`;
const PAGES2 = fs.readdirSync(PAGES_DIR2).filter(fileName => fileName.endsWith('.pug'));
//
const PAGES_DIR3 = `${PATHS.src}/pages/registration`;
const PAGES3 = fs.readdirSync(PAGES_DIR3).filter(fileName => fileName.endsWith('.pug'));
//
const PAGES_DIR4 = `${PATHS.src}/pages/signin`;
const PAGES4 = fs.readdirSync(PAGES_DIR4).filter(fileName => fileName.endsWith('.pug'));

const PAGES_DIR5 = `${PATHS.src}/pages/room-details`;
const PAGES5 = fs.readdirSync(PAGES_DIR5).filter(fileName => fileName.endsWith('.pug'));

const PAGES_DIR6 = `${PATHS.src}/pages/ui`;
const PAGES6 = fs.readdirSync(PAGES_DIR6).filter(fileName => fileName.endsWith('.pug'));
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
          name: '[name].[ext]'
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
        outputPath: 'assets/icons',
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

    new CopyWebpackPlugin([

      { from: `${PATHS.src}/pages/landing/img`, to: `assets/img` },
      { from: `${PATHS.src}/pages/registration/img`, to: `assets/img` },
      { from: `${PATHS.src}/pages/room-details/img`, to: `assets/img` },

      { from: `${PATHS.src}/fonts/`, to: `assets/fonts` },

      { from: `${PATHS.src}/static`, to: 'assets/static' },
    ]),


    ...PAGES1.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR1}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),
    ...PAGES2.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR2}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),
    ...PAGES3.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR3}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),
    ...PAGES4.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR4}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),
    ...PAGES5.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR5}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),
    ...PAGES6.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR6}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),
  ],
};
