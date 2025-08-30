const { Engine  } = require("../models/engines_model");

exports.createEngine = async (req, res) => {
  try {
    const engine = await Engine.create(req.body);
    return res.status(201).json(engine);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllEngines = async (req, res) => {
  try {
    const engines = await Engine.findAll();
    res.json(engines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEngineById = async (req, res) => {
  try {
    const engine = await Engine.findByPk(req.params.id);
    if (!engine) return res.status(404).json({ error: "Engine not found" });
    res.json(engine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEngine = async (req, res) => {
  try {
    const engine = await Engine.findByPk(req.params.id);
    if (!engine) return res.status(404).json({ error: "Engine not found" });
    
    await engine.update(req.body);
    res.json(engine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEngine = async (req, res) => {
  try {
    const engine = await Engine.findByPk(req.params.id);
    if (!engine) return res.status(404).json({ error: "Engine not found" });
    
    await engine.destroy();
    res.json({ message: "Engine deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};