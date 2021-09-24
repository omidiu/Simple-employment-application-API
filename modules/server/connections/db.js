const mongoose = require("mongoose");
const Promise = require("bluebird");

const { serverConfig } = require(global.constAddress);

const mongoConnect = async () => {
  Promise.promisifyAll(mongoose);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useUnifiedTopology", true);
  mongoose.set("debug", true);
  return mongoose.connect(serverConfig.DB_ADDRESS, {});
};

module.exports = {
  mongoConnect,
};
