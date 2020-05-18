const express = require("express"); // call express
const helmet = require("helmet");
const cors = require("cors"); // Cross-origin resource sharing
const session = require("express-session"); // create cookies

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
