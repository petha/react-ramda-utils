/* global module require __dirname */

var path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-ramda-utils.js',
    library: 'reactRamdaUtils'
  },
  externals: {
    ramda: {
      commonjs: 'ramda',
      commonjs2: 'ramda',
      amd: 'ramda',
      root: 'R'
    }
  }
};
