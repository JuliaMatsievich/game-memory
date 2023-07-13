const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
   entry: "./src/js/index.js",
   mode: isProduction ? "production" : "development",
   module: {
      rules: [
         { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
         },
      ],
   },
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      clean: true,
   },
   optimization: {
      minimizer: ["...", new CssMinimizerPlugin()],
   },
   plugins: [
      new CopyPlugin({
         patterns: [{ from: "./src/static", to: "static" }],
      }),
      new HtmlWebpackPlugin({
         template: "./index.html",
      }),
      new MiniCssExtractPlugin(),
   ],
   devtool: isProduction ? "hidden-source-map" : "source-map",
};
