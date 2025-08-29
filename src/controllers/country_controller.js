const { Country } = require("../models/country_model");

// Create a new country
exports.createCountry = async (req, res) => {
  try {
    const country = await Country.create(req.body);
    return res.status(201).json(country);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all countries
exports.getAllCountries = async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.json(countries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get country by ID
exports.getCountryById = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).json({ error: "Country not found" });
    res.json(country);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update country
exports.updateCountry = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).json({ error: "Country not found" });
    
    await country.update(req.body);
    res.json(country);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete country
exports.deleteCountry = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).json({ error: "Country not found" });
    
    await country.destroy();
    res.json({ message: "Country deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};