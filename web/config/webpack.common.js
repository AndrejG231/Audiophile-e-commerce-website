const path = require("path");
const mode = process.env.mode;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "src", "index.tsx"),
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: [require.resolve("react-refresh/babel")],
            },
          },
        ],
      },
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "..", "public", "index.html"),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, "..", "public", "assets"), to: "assets" },
      ],
    }),
  ],
};
