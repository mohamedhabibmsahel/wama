const { sequelize, Sequelize } = require("../../db.config");

const Country = sequelize.define("countrys", {
  country: { type: Sequelize.STRING, primaryKey: true },
  abb: { type: Sequelize.STRING },
  image: { type: Sequelize.STRING },
  abbTel: { type: Sequelize.STRING },
}, {
  tableName: "countrys",
  timestamps: true,
});

module.exports = { Country };
