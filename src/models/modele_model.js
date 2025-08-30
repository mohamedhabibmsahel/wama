const { sequelize, Sequelize } = require("../../db.config");
const { Engine } = require("./engines_model");

const Modele = sequelize.define("modele", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  modele: { type: Sequelize.STRING, allowNull: false },
  desiredDeliveryDate: { type: Sequelize.DATE },
  customRequirements: { type: Sequelize.TEXT },
  otherRequirements: { type: Sequelize.TEXT },
  idWishlist: { type: Sequelize.INTEGER },
}, {
  tableName: "modele",
  timestamps: true,
});
Modele.hasMany(Engine, { foreignKey: "modeleId", as: "engines" });


module.exports = { Modele };
