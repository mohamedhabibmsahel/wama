// src/controllers/boatshow_controller.js
const { BoatShow } = require("../models/boatshow_model");
const fs = require("fs");
const path = require("path");

exports.createBoatShow = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name is required" });

    // Create boatshow entry in DB (image not set yet)
    const boatshow = await BoatShow.create({ name, image: null });

    if (req.file) {
      // Ensure the target folder exists
      const uploadDir = path.join(__dirname, "../../public/images/boatshows");
      if (!fs.existsSync(uploadDir))
        fs.mkdirSync(uploadDir, { recursive: true });

      // Rename/move file to <id>.png
      const newFilename = `${boatshow.id}.png`;
      const newPath = path.join(uploadDir, newFilename);

      // Use req.file.path (actual path where multer saved it)
      fs.renameSync(req.file.path, newPath);

      // Update DB with final filename
      boatshow.image = newFilename;
      await boatshow.save();
    }

    return res.status(201).json(boatshow);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateBoatShow = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const boatShow = await BoatShow.findByPk(id);
    if (!boatShow) {
      return res.status(404).json({ message: "BoatShow not found" });
    }

    await boatShow.update({ name });

    // Handle new image
    if (req.file) {
      const ext = path.extname(req.file.originalname);
      const newFileName = `${boatShow.id}${ext}`;
      const newPath = path.join(uploadPath, newFileName);

      // delete old image if exists
      if (boatShow.image) {
        const oldPath = path.join(uploadPath, boatShow.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }

      fs.renameSync(req.file.path, newPath);
      await boatShow.update({ image: newFileName });
    }

    return res.status(200).json(boatShow);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.getAllBoatShows = async (req, res) => {
  try {
    const boatShows = await BoatShow.findAll();
    return res.status(200).json(boatShows);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.getBoatShowById = async (req, res) => {
  try {
    const { id } = req.params;
    const boatShow = await BoatShow.findByPk(id);

    if (!boatShow) {
      return res.status(404).json({ message: "BoatShow not found" });
    }

    return res.status(200).json(boatShow);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.deleteBoatShow = async (req, res) => {
  try {
    const { id } = req.params;

    const boatShow = await BoatShow.findByPk(id);
    if (!boatShow) {
      return res.status(404).json({ message: "BoatShow not found" });
    }

    await boatShow.destroy();
    return res.status(200).json({ message: "BoatShow deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};
