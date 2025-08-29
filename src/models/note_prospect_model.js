const { sequelize, Sequelize } = require("../../db.config");

const NoteProspect = sequelize.define("note_prospect", {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  note: { type: Sequelize.TEXT },
  image: { type: Sequelize.STRING },
  idProspect: { type: Sequelize.INTEGER },
}, {
  tableName: "note_prospect",
  timestamps: true,
});

module.exports = { NoteProspect };
