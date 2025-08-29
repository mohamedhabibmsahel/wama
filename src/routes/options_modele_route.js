// src/routes/options_modele_route.js

module.exports = (app) => {
  const optionsModeleController = require("../controllers/options_modele_controller");
  var router = require("express").Router();

  router.post("/", optionsModeleController.createOptionsModele);
  router.get("/", optionsModeleController.getAllOptionsModeles);
  router.get("/:id", optionsModeleController.getOptionsModeleById);
  router.put("/:id", optionsModeleController.updateOptionsModele);
  router.delete("/:id", optionsModeleController.deleteOptionsModele);
  
  app.use("/options-modele", router);
};