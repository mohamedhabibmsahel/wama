// src/routes/engines_route.js

module.exports = (app) => {
  const enginesController = require("../controllers/engines_controller");
  var router = require("express").Router();

  router.post("/", enginesController.createEngine);
  router.get("/", enginesController.getAllEngines);
  router.get("/:id", enginesController.getEngineById);
  router.put("/:id", enginesController.updateEngine);
  router.delete("/:id", enginesController.deleteEngine);
  
  app.use("/engines", router);
};