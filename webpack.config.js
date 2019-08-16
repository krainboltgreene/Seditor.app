const path = require("path")
const WebpackNodeExternals = require("webpack-node-externals")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer")
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const commonConfiguration = {
  mode: process.env.NODE_ENV || "development",
}
const moduleBabel = {
  test: /index\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  }
}

module.exports = [
  {
    ...commonConfiguration,
    entry: "./client/index.js",
    target: "web",
    devtool: "cheap-module-source-map",
    output: {
      path: path.resolve(__dirname, "tmp", "assets"),
      filename: "client.js"
    },
    module: {
      rules: [
        moduleBabel,
        {
          test: /\.css$/,
          use: {
            loader: "file-loader"
          }
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: {
            loader: "file-loader"
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: {
            loader: "file-loader"
          }
        }
      ]
    },
    plugins: [
      new BundleAnalyzerPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin([
        {from: "./**/*", to: "./"},
      ], {
        cache: true,
        context: "./assets/"
      }),
    ]
  },
  // {
  //   ...commonConfiguration,
  //   entry: "./server/index.js",
  //   target: "node",
  //   devtool: "cheap-module-source-map",
  //   node: {
  //     __dirname: false,
  //     __filename: false,
  //   },
  //   externals: [
  //     WebpackNodeExternals()
  //   ],
  //   output: {
  //     path: path.resolve(__dirname, "tmp"),
  //     filename: "server.js",
  //     libraryTarget: "commonjs2"
  //   },
  //   module: {
  //     rules: [
  //       moduleBabel,
  //     ]
  //   },
  //   plugins: [
  //     new CleanWebpackPlugin(),
  //     new BundleAnalyzerPlugin(),
  //     new FriendlyErrorsWebpackPlugin(),
  //   ]
  // }
]
