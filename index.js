// index.js

const http = require("http");
const app = require("./server");
const dotenv = require("dotenv");
dotenv.config();
const { green, blue } = require("./src/helper/constants");
// Importing Routes
require("./src/routes/access_route")(app);
require("./src/routes/boatshow_route")(app);
require("./src/routes/country_route")(app);
require("./src/routes/currency_route")(app);
require("./src/routes/details_modele_route")(app);
require("./src/routes/engines_route")(app);
require("./src/routes/modele_route")(app);
require("./src/routes/note_prospect_route")(app);
require("./src/routes/options_details_modele_route")(app);
require("./src/routes/options_modele_route")(app);
require("./src/routes/prospects_route")(app);
require("./src/routes/wishlist_route")(app);

const server = http.createServer(app);


// PORT
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
  console.log(blue(`Server listening on port ${PORT}`));
});
