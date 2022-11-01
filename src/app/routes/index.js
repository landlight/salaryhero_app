const express = require("express");
const appRouter = express.Router();
const healthCheckRoutes = require("./healthcheck");

appRouter.use("/healthcheck", healthCheckRoutes);

module.exports = appRouter;
