// src/routes/currency_route.js

module.exports = (app) => {
  const currencyController = require("../controllers/currency_controller");
  var router = require("express").Router();

  router.post("/", currencyController.createCurrency);
  router.get("/", currencyController.getAllCurrencies);
  router.get("/:id", currencyController.getCurrencyById);
  router.put("/:id", currencyController.updateCurrency);
  router.delete("/:id", currencyController.deleteCurrency);
  
  app.use("/currencies", router);
};