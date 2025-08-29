const { sequelize, Sequelize } = require("../../db.config");

const Currency = sequelize.define("currency", {
  currency: { type: Sequelize.STRING, primaryKey: true },
  abb: { type: Sequelize.STRING },
  image: { type: Sequelize.STRING },
}, {
  tableName: "currency",
  timestamps: true,
});

module.exports = { Currency };
