const router = require("express").Router();

const Users = require("./userModel");

function restricted(req, res, next) {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.status(401).json({ you: "can not pass" });
  }
}

//router.use(restricted);

router.get("/users", (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
