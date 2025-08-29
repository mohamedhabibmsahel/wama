// src/routes/country_route.js

module.exports = (app) => {
  const countryController = require("../controllers/country_controller");
  var router = require("express").Router();

  router.post("/", countryController.createCountry);
  router.get("/", countryController.getAllCountries);
  router.get("/:id", countryController.getCountryById);
  router.put("/:id", countryController.updateCountry);
  router.delete("/:id", countryController.deleteCountry);
  
  app.use("/countries", router);
};