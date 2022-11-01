const jsonError = require("json_error_response");

const healthcheck = async (req, res, next) => {
  try {
    return res.json({message: "success"});
  } catch (err) {
    jsonError.DefaultError(err, res);
  }
};

module.exports = {
  healthcheck,
};
