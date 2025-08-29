// src/routes/note_prospect_route.js

module.exports = (app) => {
  const noteProspectController = require("../controllers/note_prospect_controller");
  var router = require("express").Router();

  router.post("/", noteProspectController.createNoteProspect);
  router.get("/", noteProspectController.getAllNoteProspects);
  router.get("/:id", noteProspectController.getNoteProspectById);
  router.put("/:id", noteProspectController.updateNoteProspect);
  router.delete("/:id", noteProspectController.deleteNoteProspect);
  
  app.use("/note-prospects", router);
};