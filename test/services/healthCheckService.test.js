const healthCheckService = require("../../src/app/services/healthcheck");

describe("Test healthCheck service", () => {
  test("should return {message: true}", () => {
    expect(healthCheckService.healthCheck()).toHaveProperty("message");
    expect(healthCheckService.healthCheck()).toHaveProperty("message", true);
  });
});
