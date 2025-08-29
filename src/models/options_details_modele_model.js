const { sequelize, Sequelize } = require("../../db.config");

const OptionsDetailsModele = sequelize.define("options_details_modele", {
  modele: { type: Sequelize.STRING },
  optionModele: { type: Sequelize.STRING },
  description: { type: Sequelize.TEXT },
  image: { type: Sequelize.STRING },
}, {
  tableName: "options_details_modele",
  timestamps: true,
});

module.exports = { OptionsDetailsModele };
