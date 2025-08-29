const { OptionsDetailsModele } = require("../models/options_details_modele_model");

exports.createOptionsDetailsModele = async (req, res) => {
  try {
    const optionsDetailsModele = await OptionsDetailsModele.create(req.body);
    return res.status(201).json(optionsDetailsModele);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllOptionsDetailsModeles = async (req, res) => {
  try {
    const optionsDetailsModeles = await OptionsDetailsModele.findAll();
    res.json(optionsDetailsModeles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOptionsDetailsModeleById = async (req, res) => {
  try {
    const optionsDetailsModele = await OptionsDetailsModele.findByPk(req.params.id);
    if (!optionsDetailsModele) return res.status(404).json({ error: "Options details modele not found" });
    res.json(optionsDetailsModele);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOptionsDetailsModele = async (req, res) => {
  try {
    const optionsDetailsModele = await OptionsDetailsModele.findByPk(req.params.id);
    if (!optionsDetailsModele) return res.status(404).json({ error: "Options details modele not found" });
    
    await optionsDetailsModele.update(req.body);
    res.json(optionsDetailsModele);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOptionsDetailsModele = async (req, res) => {
  try {
    const optionsDetailsModele = await OptionsDetailsModele.findByPk(req.params.id);
    if (!optionsDetailsModele) return res.status(404).json({ error: "Options details modele not found" });
    
    await optionsDetailsModele.destroy();
    res.json({ message: "Options details modele deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};