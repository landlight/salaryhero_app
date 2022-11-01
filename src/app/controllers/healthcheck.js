const jsonError = require("json_error_response");
const healthCheckService = require("../services/healthcheck");

const healthcheck = async (req, res, next) => {
  try {
    const result = healthCheckService.healthCheck();
    return res.status(200).json(result);
  } catch (err) {
    jsonError.DefaultError(err, res);
  }
};

module.exports = {
  healthcheck,
};
