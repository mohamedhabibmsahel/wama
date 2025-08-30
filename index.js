// index.js

const http = require("http");
const app = require("./server");
const dotenv = require("dotenv");
dotenv.config();
const { green, blue } = require("./src/helper/constants");

// Middleware global pour préfixer toutes les routes par /api
const express = require("express");
const apiRouter = express.Router();

// Importing Routes (toutes montées sur /api)
require("./src/routes/access_route")(apiRouter);
require("./src/routes/boatshow_route")(apiRouter);
require("./src/routes/country_route")(apiRouter);
require("./src/routes/currency_route")(apiRouter);
require("./src/routes/details_modele_route")(apiRouter);
require("./src/routes/engines_route")(apiRouter);
require("./src/routes/modele_route")(apiRouter);
require("./src/routes/note_prospect_route")(apiRouter);
require("./src/routes/options_details_modele_route")(apiRouter);
require("./src/routes/options_modele_route")(apiRouter);
require("./src/routes/prospects_route")(apiRouter);
require("./src/routes/wishlist_route")(apiRouter);

// Ici on dit à Express d'utiliser /api comme préfixe global
app.use("/api", apiRouter);

const server = http.createServer(app);

// PORT
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
  console.log(blue(`🚀 Server listening on port ${PORT}`));
});
