const { sequelize, Sequelize } = require("../../db.config");

const Wishlist = sequelize.define("wishlist", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  date: { type: Sequelize.DATE },
  prospect: { type: Sequelize.STRING },
  currentVessel: { type: Sequelize.STRING },
  homePort: { type: Sequelize.STRING },
  loa: { type: Sequelize.STRING },
  currency: { type: Sequelize.STRING },
  maxBudget: { type: Sequelize.FLOAT },
  cruisingLifestyle: { type: Sequelize.STRING },
  employee: { type: Sequelize.STRING },
}, {
  tableName: "wishlist",
  timestamps: true,
});

module.exports = { Wishlist };
