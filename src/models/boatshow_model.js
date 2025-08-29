// src/models/boatshow_model.js
const { sequelize, Sequelize } = require("../../db.config");

const BoatShow = sequelize.define(
  "boatshow",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING, // can store URL or path to the image
      allowNull: true,
    },
  },
  {
    tableName: "boatshow",
    timestamps: true, // createdAt / updatedAt
  }
);

module.exports = { BoatShow };
