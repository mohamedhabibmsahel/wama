const { sequelize, Sequelize } = require("../../db.config");

const Access = sequelize.define(
  "access",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: { isEmail: true },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    titre: {
      type: Sequelize.ENUM("admin", "agent", "client"),
      defaultValue: "client",
    },
    level: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    phone: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: true,
    },
    actif: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "access",
    timestamps: true,
  }
);

module.exports = { Access };
