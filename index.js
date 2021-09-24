const path = require("path");

global.constAddress = path.join(__dirname, "constants");
global.servicesAddress = path.join("core", "injections", "service.js");
global.reposAddress = path.join("core", "injections", "repo.js");

require("dotenv").config();
require("./modules/server/bin/www");
