#!/usr/bin/env node
/* eslint-disable node/shebang */

/**
 * Module dependencies.
 */
const os = require("os");
const cluster = require("cluster");
const http = require("http");
const app = require("../app");

const { serverConfig } = require(global.constAddress);

const debug = require("debug")("server:server");
const { db } = require("../connections");

const cCPUs =
  process.env.npm_lifecycle_event === "debug" || process.env.TEST
    ? 1
    : os.cpus().length;

if (cluster.isMaster) {
  // Create a worker for each CPU
  for (let i = 0; i < cCPUs; i++) cluster.fork();

  cluster.on("online", function (worker) {
    console.log("Worker " + worker.process.pid + " is online.");
  });
  cluster.on("exit", function (worker, code, signal) {
    console.log("worker " + worker.process.pid + " died.");
  });
} else {
  /**
   * Normalize a port into a number, string, or false.
   */

  const normalizePort = (val) => {
    const port = parseInt(val, 10);
    if (isNaN(port)) return val;

    if (port >= 0) return port;

    return false;
  };

  /**
   * Event listener for HTTP server "error" event.
   */

  const onError = (error) => {
    if (error.syscall !== "listen") throw error;

    const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case "EACCES":
        console.error(`${bind} requires elevated privileges`);
        // eslint-disable-next-line no-process-exit
        process.exit(1);
      case "EADDRINUSE":
        console.error(`${bind} is already in use`);
        // eslint-disable-next-line no-process-exit
        process.exit(1);
      default:
        throw error;
    }
  };

  /**
   * Event listener for HTTP server "listening" event.
   */

  const onListening = () => {
    const addr = server.address();
    const bind =
      typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
  };

  /**
   * Get port from environment and store in Express.
   */

  const port = normalizePort(serverConfig.PORT);
  app.set("port", port);

  /**
   * Create HTTP server.
   */

  const server = http.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */

  (async function () {
    try {
      await db.mongoConnect();
      console.log("1- Connections was successful");
      server.listen(port);
      console.log(`2- Server listening at port ${port}`);
      console.log(`Node_ENV: ${serverConfig.NODE_ENV}`);
      server.on("error", onError);
      server.on("listening", onListening);
    } catch (err) {
      console.log(err);
      console.log("Connections was not successful");
    }
  })();
}
