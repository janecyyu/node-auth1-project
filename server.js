const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const usersRouter = require("./users/userRouter");
const authRouter = require("./auth/router");

const server = express();

// configure express-session middleware
const sessionConfig = {
  name: "monster",
  secret: process.env.COOKIE_SECRET || "keep it safe!",
  cookie: {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    secure: process.env.SECURE_COOKIE || false, // only set cookies over https. Server will not send back a cookie over http.
  }, // 1 day in milliseconds
  httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
  resave: false,
  saveUninitialized: process.env.USER_ALLOWED_COOKIE || true, //經過client同意是否儲存cookie
};

//create sessions and send the cookie back
//server.use(session(sessionConfig));

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api", usersRouter);
server.use("/api", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
