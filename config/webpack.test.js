/**
 * angular-expandable-list
 *
 * Copyright 2017, @andreasonny83, All rights reserved.
 *
 * @author: @andreasonny83 <andreasonny83@gmail.com>
 */

const helpers = require('./helpers');
const path = require('path');

/**
 * Webpack Plugins
 */
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
process.noDeprecation = true;

module.exports = function (options) {
  return {

    devtool: 'inline-source-map',

    resolve: {
      extensions: ['.ts', '.js'],
      modules: [
      helpers.root('node_modules'),
      helpers.root('src'),
    ]
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // these packages have problems with their sourcemaps
          helpers.root('node_modules/rxjs'),
          helpers.root('node_modules/@angular'),
        ]
      },

      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: helpers.root('src/tsconfig.json'),
              sourceMap: false,
              inlineSourceMap: true,
              compilerOptions: {
                removeComments: true
              }
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        exclude: [
          /\.e2e\.ts$/
        ]
      },

      {
        test: /\.(css|html)$/,
        loader: 'raw-loader'
      },

      {
        enforce: 'post',
        test: /\.(js|ts)$/,
        use: [
          {
            loader: 'istanbul-instrumenter-loader',
            options: {
              esModules: true,
            }
          }
        ],
        include: helpers.root('src'),
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      }
    ]
  },

   plugins: [
    new DefinePlugin({
      'ENV': JSON.stringify(ENV),
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'NODE_ENV': JSON.stringify(ENV)
      }
    }),

    new ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('src'),
      { }
     ),
  ],

  node: {
    global: true,
    process: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
 };
}
