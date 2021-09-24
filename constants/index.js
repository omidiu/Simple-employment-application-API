require("dotenv").config();

const coreConfig = require("./core");
const serverConfig = require("./server");
const utilsConfig = require("./utils");

module.exports = {
  coreConfig,
  serverConfig,
  utilsConfig,
};
