const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 3000,
  },
  mode: "development",
  devtool: "cheap-module-source-map",
  plugins: [new ReactRefreshWebpackPlugin()],
};
