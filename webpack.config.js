const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const CSSExtract = new extractTextPlugin('styles.css');

  return {
    mode: env,
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: env === 'production' ? 'source-map' : 'inline-source-map'
  };
};
