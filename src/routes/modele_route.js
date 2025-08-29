// src/routes/modele_route.js

module.exports = (app) => {
  const modeleController = require("../controllers/modele_controller");
  var router = require("express").Router();

  router.post("/", modeleController.createModele);
  router.get("/", modeleController.getAllModeles);
  router.get("/:id", modeleController.getModeleById);
  router.put("/:id", modeleController.updateModele);
  router.delete("/:id", modeleController.deleteModele);
  
  app.use("/modeles", router);
};