// index.js

const http = require("http");
const app = require("./server");
const dotenv = require("dotenv");
dotenv.config();
const { green, blue } = require("./src/helper/constants");
// Importing Routes
require("./src/routes/access_route")(app);
require("./src/routes/boatshow_route")(app);

// Create HTTP server

const server = http.createServer(app);
// Initialize Socket.io
// const io = ;
// require("./socket")(io);

// PORT
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
  console.log(blue(`Server listening on port ${PORT}`));
});
