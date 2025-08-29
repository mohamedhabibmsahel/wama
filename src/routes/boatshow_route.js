// src/routes/boatshow_route.js
const express = require("express");
const fileUpload = require("../middlewares/multer");
const boatshowController = require("../controllers/boatshow_controller");

module.exports = (app) => {
  const router = express.Router(); // ✅ you were missing this

  router.post("/", fileUpload, boatshowController.createBoatShow);
  router.get("/", boatshowController.getAllBoatShows);
  router.get("/:id", boatshowController.getBoatShowById);
  router.put("/:id", fileUpload, boatshowController.updateBoatShow);
  router.delete("/:id", boatshowController.deleteBoatShow);

  app.use("/boatshow", router);
};
