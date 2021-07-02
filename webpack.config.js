const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const publicPath = path.resolve('public');

/** @type {(env: Record<string, unknown>) => import('webpack').Configuration} */
module.exports = (env, argv) => {
  const isBuild = !!env.WEBPACK_BUILD;
  const mode = argv.mode || isBuild ? 'production' : 'development';

  return {
    mode,
    target: 'web',
    entry: path.resolve('src'),
    output: {
      path: publicPath,
      filename: 'bundle/[name].[chunkhash:8].js',
      assetModuleFilename: 'bundle/[name].[contenthash:8].[ext]',
      publicPath: '/',
    },
    stats: 'errors-warnings',
    performance: {
      hints: isBuild && 'warning',
      maxEntrypointSize: 1024 * 1024,
      maxAssetSize: 1024 * 1024,
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.(tsx?|jsx?)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(woff2?)$/,
          type: 'asset/inline',
        },
        {
          test: /\.(gif|jpe?g|png|apng|svg|webp)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024, // 4kb
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        minify: false,
        template: path.resolve('src/index.html'),
      }),
      ...(isBuild
        ? [
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              openAnalyzer: false,
              reportFilename: path.resolve('out/bundle-report.html'),
            }),
          ]
        : []),
    ],
    devServer: {
      contentBase: publicPath,
      stats: 'minimal',
      compress: true,
      port: 3000,
      open: true,
    },
  };
};
