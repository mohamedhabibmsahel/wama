const { NoteProspect } = require("../models/note_prospect_model");

exports.createNoteProspect = async (req, res) => {
  try {
    const noteProspect = await NoteProspect.create(req.body);
    return res.status(201).json(noteProspect);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllNoteProspects = async (req, res) => {
  try {
    const noteProspects = await NoteProspect.findAll();
    res.json(noteProspects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNoteProspectById = async (req, res) => {
  try {
    const noteProspect = await NoteProspect.findByPk(req.params.id);
    if (!noteProspect) return res.status(404).json({ error: "Note prospect not found" });
    res.json(noteProspect);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateNoteProspect = async (req, res) => {
  try {
    const noteProspect = await NoteProspect.findByPk(req.params.id);
    if (!noteProspect) return res.status(404).json({ error: "Note prospect not found" });
    
    await noteProspect.update(req.body);
    res.json(noteProspect);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteNoteProspect = async (req, res) => {
  try {
    const noteProspect = await NoteProspect.findByPk(req.params.id);
    if (!noteProspect) return res.status(404).json({ error: "Note prospect not found" });
    
    await noteProspect.destroy();
    res.json({ message: "Note prospect deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};