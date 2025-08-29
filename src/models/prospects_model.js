const { sequelize, Sequelize } = require("../../db.config");

const Prospect = sequelize.define("prospects", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  mobile: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING, validate: { isEmail: true } },
  address: { type: Sequelize.STRING },
  country: { type: Sequelize.STRING },
  boatshow: { type: Sequelize.STRING },
  image: { type: Sequelize.STRING },
}, {
  tableName: "prospects",
  timestamps: true,
});

module.exports = { Prospect };
