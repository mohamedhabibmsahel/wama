// src/routes/details_modele_route.js

module.exports = (app) => {
  const detailsModeleController = require("../controllers/details_modele_controller");
  var router = require("express").Router();

  router.post("/", detailsModeleController.createDetailsModele);
  router.get("/", detailsModeleController.getAllDetailsModeles);
  router.get("/:id", detailsModeleController.getDetailsModeleById);
  router.put("/:id", detailsModeleController.updateDetailsModele);
  router.delete("/:id", detailsModeleController.deleteDetailsModele);
  
  app.use("/details-modele", router);
};