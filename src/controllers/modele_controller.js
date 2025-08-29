const { Modele } = require("../models/modele_model");

exports.createModele = async (req, res) => {
  try {
    const modele = await Modele.create(req.body);
    return res.status(201).json(modele);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllModeles = async (req, res) => {
  try {
    const modeles = await Modele.findAll();
    res.json(modeles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getModeleById = async (req, res) => {
  try {
    const modele = await Modele.findByPk(req.params.id);
    if (!modele) return res.status(404).json({ error: "Modele not found" });
    res.json(modele);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateModele = async (req, res) => {
  try {
    const modele = await Modele.findByPk(req.params.id);
    if (!modele) return res.status(404).json({ error: "Modele not found" });
    
    await modele.update(req.body);
    res.json(modele);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteModele = async (req, res) => {
  try {
    const modele = await Modele.findByPk(req.params.id);
    if (!modele) return res.status(404).json({ error: "Modele not found" });
    
    await modele.destroy();
    res.json({ message: "Modele deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};