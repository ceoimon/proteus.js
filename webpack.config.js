/*
 * Wire
 * Copyright (C) 2017 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

'use strict';

const pkg = require('./package.json');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: `${__dirname}/${pkg.main}`,
  },
  output: {
    filename: 'proteus.js',
    library: 'Proteus',
    libraryTarget: 'var',
    path: `${__dirname}/dist`,
  },
  node: {
    fs: 'empty',
    crypto: 'empty',
  },
  externals: {
    'libsodium-wrappers-sumo': 'sodium',
    'wire-webapp-cbor': 'CBOR',
  },
  plugins: [
    new webpack.BannerPlugin(`${pkg.name} v${pkg.version}`),
  ],
  performance: {
    maxAssetSize: 100,
    maxEntrypointSize: 300,
    hints: 'warning',
  },
};
