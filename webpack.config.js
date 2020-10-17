const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const resolve = dir => path.join(__dirname, './', dir);

const { NODE_ENV, BULMA_VERSION = '0.9.0', LEGACY = false } = process.env;
const isDev = NODE_ENV === 'development';

const BundleAnalyzerPluginConfig = new BundleAnalyzerPlugin({
  analyzerMode: LEGACY ? 'disabled' : 'static',
  reportFilename: isDev
    ? 'reports/report.html'
    : 'reports/report-min.html',
});

module.exports = {
  entry: [
    `./src/${LEGACY ? BULMA_VERSION : 'index'}.js`,
  ],
  output: {
    filename: isDev
      ? `react-bulma-companion${LEGACY ? `-${BULMA_VERSION}` : ''}.js`
      : `react-bulma-companion${LEGACY ? `-${BULMA_VERSION}` : ''}.min.js`,
    path: resolve(LEGACY ? 'dist/legacy' : 'dist'),
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
  performance: {
    hints: false,
  },
};
