const dbConfig = require("../config/dbconfig");
const Sequelize = require("sequelize");
let bcrypt = require("bcryptjs");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);

db.roles = require("../models/roles.model.js")(sequelize, Sequelize);
db.roles.belongsToMany(db.users, {
  through: "user_roles",
  foreignKey: {
    name: "roleId",
    field: "role_id"
  },
  otherKey: {
    name: "userId",
    field: "user_id"
  }
});

db.users.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: {
    name: "userId",
    field: "user_id" 
  },
  otherKey: {
    name: "roleId",
    field: "role_id"
  }
});

db.ROLES = ["user", "sh_admin"];

db.users.create({
  email: 'admin@salaryhero.com',
  firstName: 'salary',
  lastName: 'hero',
  password: bcrypt.hashSync("salaryhero", 8)
})

module.exports = db;
