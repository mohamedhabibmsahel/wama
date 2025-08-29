const { Currency } = require("../models/currency_model");

exports.createCurrency = async (req, res) => {
  try {
    const currency = await Currency.create(req.body);
    return res.status(201).json(currency);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllCurrencies = async (req, res) => {
  try {
    const currencies = await Currency.findAll();
    res.json(currencies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCurrencyById = async (req, res) => {
  try {
    const currency = await Currency.findByPk(req.params.id);
    if (!currency) return res.status(404).json({ error: "Currency not found" });
    res.json(currency);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCurrency = async (req, res) => {
  try {
    const currency = await Currency.findByPk(req.params.id);
    if (!currency) return res.status(404).json({ error: "Currency not found" });
    
    await currency.update(req.body);
    res.json(currency);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCurrency = async (req, res) => {
  try {
    const currency = await Currency.findByPk(req.params.id);
    if (!currency) return res.status(404).json({ error: "Currency not found" });
    
    await currency.destroy();
    res.json({ message: "Currency deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};