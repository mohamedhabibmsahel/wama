const { Prospects } = require("../models/prospects_model");

exports.createProspect = async (req, res) => {
  try {
    const prospect = await Prospects.create(req.body);
    return res.status(201).json(prospect);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllProspects = async (req, res) => {
  try {
    const prospects = await Prospects.findAll();
    res.json(prospects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProspectById = async (req, res) => {
  try {
    const prospect = await Prospects.findByPk(req.params.id);
    if (!prospect) return res.status(404).json({ error: "Prospect not found" });
    res.json(prospect);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProspect = async (req, res) => {
  try {
    const prospect = await Prospects.findByPk(req.params.id);
    if (!prospect) return res.status(404).json({ error: "Prospect not found" });
    
    await prospect.update(req.body);
    res.json(prospect);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProspect = async (req, res) => {
  try {
    const prospect = await Prospects.findByPk(req.params.id);
    if (!prospect) return res.status(404).json({ error: "Prospect not found" });
    
    await prospect.destroy();
    res.json({ message: "Prospect deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};