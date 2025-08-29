const { sequelize, Sequelize } = require("../../db.config");

const Engine = sequelize.define("engines", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  engine: { type: Sequelize.STRING },
  model: { type: Sequelize.STRING },
  maxSpeed: { type: Sequelize.STRING },
  cruiseSpeed: { type: Sequelize.STRING },
}, {
  tableName: "engines",
  timestamps: true,
});

module.exports = { Engine };
