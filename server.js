/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
var cors = require("cors");
const path = require("path");
const fs = require("fs");
const { blue } = require("./src/helper/constants");
// config
dotenv.config();

// const
const app = express();
// Connect to the database and synchronise models
const { sequelize } = require("./db.config");
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log(blue("Synced db."));
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: "application/xml" }));
app.use(express.static(path.join(__dirname, "public")));

// API for uploads file (photo, galleries)
app.get("/public/properties/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `./public/properties/${req.params.id}`));
});
app.get("/public/images/property_type/:id", (req, res) => {
  res.sendFile(
    path.join(__dirname, `./public/images/property_type//${req.params.id}`)
  );
});
app.get("/public/email/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `./public/email/${req.params.id}`));
});
app.get("/public/properties/hd/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `./public/properties/hd/${req.params.id}`));
});
app.get("/public/images/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `./public/images/${req.params.id}`));
});
app.get("/public/images/client/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `./public/images/client/${req.params.id}`));
});
app.get("/public/images/bank/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `./public/images/bank/${req.params.id}`));
});
app.get("/public/ical/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `./public/ical/${req.params.id}`));
});
app.get("/public/csv/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `./public/csv/${req.params.id}`));
});
app.get("/public/weekend/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `./public/weekend/${req.params.id}`));
});
app.get("/public/images/service_screen/:id", (req, res) => {
  res.sendFile(
    path.join(__dirname, `./public/images/service_screen/${req.params.id}`)
  );
});
app.get("/apple-app-site-association", (req, res) => {
  const filePath = "./apple-app-site-association";
  const fileData = fs.readFileSync(filePath);
  res.setHeader("Content-Type", "application/json");
  res.send(fileData);
});
// API for uploads file (photo, galleries)
app.get("/public/css/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `./public/css/${req.params.id}`));
});

// API for uploads file (photo, galleries)
app.get("/public/javascripts/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `./public/javascripts/${req.params.id}`));
});

app.use(cors());

// API for uploads file (photo, galleries)
app.get("/uploads/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `./uploads/${req.params.id}`));
});

app.get("/api-docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swagger);
});
// app.use(responseToString);

module.exports = app;
