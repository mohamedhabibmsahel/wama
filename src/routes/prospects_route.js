// src/routes/prospects_route.js

module.exports = (app) => {
  const prospectsController = require("../controllers/prospects_controller");
  var router = require("express").Router();

  router.post("/", prospectsController.createProspect);
  router.get("/", prospectsController.getAllProspects);
  router.get("/:id", prospectsController.getProspectById);
  router.put("/:id", prospectsController.updateProspect);
  router.delete("/:id", prospectsController.deleteProspect);
  
  app.use("/prospects", router);
};