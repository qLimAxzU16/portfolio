const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

let htmlPageNames = ["index"];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
  });
});

module.exports = {
  entry: "./src/js/index.js",
  plugins: [new MiniCssExtractPlugin(), ...multipleHtmlPlugins],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
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
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  watch: true,
};
