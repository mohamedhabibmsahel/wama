const { sequelize, Sequelize } = require("../../db.config");

const DetailsModele = sequelize.define("details_modele", {
  modele: { type: Sequelize.STRING, primaryKey: true },
  length: { type: Sequelize.STRING },
  beam: { type: Sequelize.STRING },
  dryWeight: { type: Sequelize.STRING },
  draft: { type: Sequelize.STRING },
  bridgeClearance: { type: Sequelize.STRING },
  engine: { type: Sequelize.STRING },
  fuelCapacity: { type: Sequelize.STRING },
  maxSpeed: { type: Sequelize.STRING },
  cruisingSpeed: { type: Sequelize.STRING },
  image: { type: Sequelize.STRING },
}, {
  tableName: "details_modele",
  timestamps: true,
});

module.exports = { DetailsModele };
