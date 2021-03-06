const path = require("path");
const MiniCSSPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");

module.exports = (mode) => ({
  optimization: {
    splitChunks: { name: "vendor", chunks: "all" },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCSSPlugin.loader, "css-loader"],
      },
    ],
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new MiniCSSPlugin(),
    new CompressionPlugin({
      algorithm: 'brotliCompress',
    filename: '[name].js.br[query]',
    compressionOptions: { level: 11 },
    }),
  ],
});
