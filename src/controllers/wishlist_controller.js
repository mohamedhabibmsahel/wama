const { Wishlist } = require("../models/wishlist_model");

exports.createWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.create(req.body);
    return res.status(201).json(wishlist);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllWishlists = async (req, res) => {
  try {
    const wishlists = await Wishlist.findAll();
    res.json(wishlists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWishlistById = async (req, res) => {
  try {
    const wishlist = await Wishlist.findByPk(req.params.id);
    if (!wishlist) return res.status(404).json({ error: "Wishlist not found" });
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findByPk(req.params.id);
    if (!wishlist) return res.status(404).json({ error: "Wishlist not found" });
    
    await wishlist.update(req.body);
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findByPk(req.params.id);
    if (!wishlist) return res.status(404).json({ error: "Wishlist not found" });
    
    await wishlist.destroy();
    res.json({ message: "Wishlist deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};