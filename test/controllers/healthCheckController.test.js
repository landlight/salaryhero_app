const healthCheckController = require("../../src/app/controllers/healthcheck");
const mockUtils = require("../utils");

describe("Test healthCheck controller", () => {
  test("should have been called once", async () => {
    const req = mockUtils.mockRequest({}, {});
    const res = mockUtils.mockResponse();
    await healthCheckController.healthcheck(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
  });
});
