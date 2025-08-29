// src/routes/access_route.js

module.exports = (app) => {
  const accessController = require("../controllers/access_controller");
  var router = require("express").Router();

  router.post("/", accessController.createAccess);
  router.get("/", accessController.getAllAccess);
  router.get("/:id", accessController.getAccessById);
  router.put("/:id", accessController.updateAccess);
  router.delete("/:id", accessController.deleteAccess);
  app.use("/access", router);
};
