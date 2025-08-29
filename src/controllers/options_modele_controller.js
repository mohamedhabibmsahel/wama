const { OptionsModele } = require("../models/options_modele_model");

exports.createOptionsModele = async (req, res) => {
  try {
    const optionsModele = await OptionsModele.create(req.body);
    return res.status(201).json(optionsModele);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllOptionsModeles = async (req, res) => {
  try {
    const optionsModeles = await OptionsModele.findAll();
    res.json(optionsModeles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOptionsModeleById = async (req, res) => {
  try {
    const optionsModele = await OptionsModele.findByPk(req.params.id);
    if (!optionsModele) return res.status(404).json({ error: "Options modele not found" });
    res.json(optionsModele);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOptionsModele = async (req, res) => {
  try {
    const optionsModele = await OptionsModele.findByPk(req.params.id);
    if (!optionsModele) return res.status(404).json({ error: "Options modele not found" });
    
    await optionsModele.update(req.body);
    res.json(optionsModele);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOptionsModele = async (req, res) => {
  try {
    const optionsModele = await OptionsModele.findByPk(req.params.id);
    if (!optionsModele) return res.status(404).json({ error: "Options modele not found" });
    
    await optionsModele.destroy();
    res.json({ message: "Options modele deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};