const { sequelize, Sequelize } = require("../../db.config");

const OptionsModele = sequelize.define("options_modele", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  option: { type: Sequelize.STRING },
  idModele: { type: Sequelize.INTEGER },
}, {
  tableName: "options_modele",
  timestamps: true,
});

module.exports = { OptionsModele };
