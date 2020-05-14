const Sequelize = require("sequelize");
const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:lepaya@localhost:5432/postgres";
const db = new Sequelize(databaseURL);

module.exports = db;
