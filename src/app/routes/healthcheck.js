const healthCheckController = require("../controllers/healthCheck");
const express = require("express");

const router = express.Router();

router.route("/")
    .get(healthCheckController.healthcheck);

module.exports = router;
