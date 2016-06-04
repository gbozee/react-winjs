var path = require('path');

module.exports = {
  cache: true,
  entry: './index.jsx',
  output: {
    filename: 'browser-bundle.js'
  },
  module: {
    loaders: [
      // {test: /\.jsx/, loader: 'jsx-loader'},
      {test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: [
        // 'react-hot',
        'babel-loader'
      ],}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
        path.resolve('../../'),
        'node_modules',
        'bower_components'
      ],
    alias: {
      'react-winjs$': path.join(__dirname, '../../react-winjs.js')
    }
  },
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // }
};
