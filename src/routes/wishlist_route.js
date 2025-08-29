// src/routes/wishlist_route.js

module.exports = (app) => {
  const wishlistController = require("../controllers/wishlist_controller");
  var router = require("express").Router();

  router.post("/", wishlistController.createWishlist);
  router.get("/", wishlistController.getAllWishlists);
  router.get("/:id", wishlistController.getWishlistById);
  router.put("/:id", wishlistController.updateWishlist);
  router.delete("/:id", wishlistController.deleteWishlist);
  
  app.use("/wishlists", router);
};