module.exports = {
  HOST: process.env.DB_HOST || "db",
  USER: process.env.DB_USERNAME || "root",
  PASSWORD: process.env.DB_PASSWORD || "password",
  DB: process.env.DB_NAME || "salaryhero",
  DB_URL: process.env.DB_URL || "",
  port: process.env.DB_PORT || 5432,
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
