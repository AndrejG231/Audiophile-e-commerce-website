const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const DefinePlugin = require("webpack").DefinePlugin;

module.exports = {
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 3000,
  },
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new DefinePlugin({
      "process.env.mode": JSON.stringify("dev"),
      "process.env.host": JSON.stringify("http://localhost:3000/"),
    }),
  ],
};
