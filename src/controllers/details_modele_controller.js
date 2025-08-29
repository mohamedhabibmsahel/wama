const { DetailsModele } = require("../models/details_modele_model");

// Create a new details modele
exports.createDetailsModele = async (req, res) => {
  try {
    const detailsModele = await DetailsModele.create(req.body);
    return res.status(201).json(detailsModele);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all details modeles
exports.getAllDetailsModeles = async (req, res) => {
  try {
    const detailsModeles = await DetailsModele.findAll();
    res.json(detailsModeles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get details modele by ID
exports.getDetailsModeleById = async (req, res) => {
  try {
    const detailsModele = await DetailsModele.findByPk(req.params.id);
    if (!detailsModele) return res.status(404).json({ error: "Details modele not found" });
    res.json(detailsModele);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update details modele
exports.updateDetailsModele = async (req, res) => {
  try {
    const detailsModele = await DetailsModele.findByPk(req.params.id);
    if (!detailsModele) return res.status(404).json({ error: "Details modele not found" });
    
    await detailsModele.update(req.body);
    res.json(detailsModele);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete details modele
exports.deleteDetailsModele = async (req, res) => {
  try {
    const detailsModele = await DetailsModele.findByPk(req.params.id);
    if (!detailsModele) return res.status(404).json({ error: "Details modele not found" });
    
    await detailsModele.destroy();
    res.json({ message: "Details modele deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};