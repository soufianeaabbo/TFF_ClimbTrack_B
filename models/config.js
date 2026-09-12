const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "ClimbTrack",
  "climbtrack",
  "climbtrack123",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
  }
);

module.exports = { sequelize };