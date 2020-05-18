const router = require("express").Router();

const Users = require("./userModel");

function restricted(req, res, next) {
  console.log(req.session);

  if (req.session && req.session.loggedIn) {
    next();
  } else {
    console.log(req.session.loggedIn);
    res.status(401).json({ you: "can not pass!" });
  }
}

router.get("/users", restricted, (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
