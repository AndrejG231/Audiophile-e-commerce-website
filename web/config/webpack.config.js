const { merge } = require("webpack-merge");
const mainCfg = require("./webpack.common.js");
const prodCfg = require(`./webpack.prod.js`);
const devCfg = require("./webpack.dev.js");

module.exports = (env) => {
  if (env.mode === "dev") {
    return merge(mainCfg, devCfg);
  }
  return merge(mainCfg, prodCfg);
};
