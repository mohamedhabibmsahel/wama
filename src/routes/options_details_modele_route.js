// src/routes/options_details_modele_route.js

module.exports = (app) => {
  const optionsDetailsModeleController = require("../controllers/options_details_modele_controller");
  var router = require("express").Router();

  router.post("/", optionsDetailsModeleController.createOptionsDetailsModele);
  router.get("/", optionsDetailsModeleController.getAllOptionsDetailsModeles);
  router.get("/:id", optionsDetailsModeleController.getOptionsDetailsModeleById);
  router.put("/:id", optionsDetailsModeleController.updateOptionsDetailsModele);
  router.delete("/:id", optionsDetailsModeleController.deleteOptionsDetailsModele);
  
  app.use("/options-details-modele", router);
};