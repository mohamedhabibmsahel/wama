const { Access } = require("../models/access_model");
const bcrypt = require("bcrypt");

exports.createAccess = async (req, res) => {
  try {
    const { email, password, username, titre, level, phone, actif } = req.body;

    // Check if user exists
    const existingUser = await checkUserExists(email, phone);
    if (existingUser) {
      return res.status(400).json({
        message: "User with this email or phone already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const access = await Access.create({
      email,
      password: hashedPassword,
      username,
      titre,
      level,
      phone,
      actif,
    });

    return res.status(201).json(access);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all users
exports.getAllAccess = async (req, res) => {
  try {
    const users = await Access.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get user by ID
exports.getAccessById = async (req, res) => {
  try {
    const user = await Access.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update user
exports.updateAccess = async (req, res) => {
  try {
    const user = await Access.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    await user.update(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete user
exports.deleteAccess = async (req, res) => {
  try {
    const user = await Access.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    await user.destroy();
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//// helper functions

const checkUserExists = async (email, phone) => {
  const user = await Access.findOne({
    where: {
      // Sequelize OR condition
      [require("sequelize").Op.or]: [{ email }, { phone }],
    },
  });
  return user; // returns null if not found
};
