const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const resolve = dir => path.join(__dirname, './', dir);

const isDev = process.env.NODE_ENV === 'development';

const BundleAnalyzerPluginConfig = new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  reportFilename: isDev ? 'reports/report.html' : 'reports/report-min.html',
});

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    filename: isDev ? 'react-bulma-companion.js' : 'react-bulma-companion.min.js',
    path: resolve('dist'),
    umdNamedDefine: true,
    libraryTarget: 'umd',
    library: 'react-bulma-companion',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve('src')],
        loader: 'babel-loader',
      },
    ],
  },
  externals: {
    react: 'commonjs react',
    'prop-types': 'commonjs prop-types',
  },
  optimization: {
    minimize: !isDev,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    BundleAnalyzerPluginConfig,
  ],
};
