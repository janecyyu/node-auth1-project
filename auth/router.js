const bcryptjs = require("bcryptjs"); // hash pw
const router = require("express").Router();
const Users = require("../users/userModel");
const { isValid } = require("../users/userService");

router.post("/register", (req, res) => {
  const credentials = req.body;
  //生成或者Salt使用的Salt长度，默认为 10
  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcryptjs.hashSync(credentials.password, rounds);
    credentials.password = hash;
    // save the user to the database
    Users.add(credentials)
      .then((user) => {
        res.status(201).json({ data: user });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        "please provide username and password and the password should be alphanumeric",
    });
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (isValid(req.body)) {
    Users.findBy({ username })
      //.first()
      .then(([user]) => {
        console.log(user);
        // check that passwords match
        if (user && bcryptjs.compareSync(password, user.password)) {
          //save info about client inside the session(req.session)
        //   req.session.loggedIn = true;
        //   req.session.user = user;
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          // we will return 401 if the password or username are invalid
          // we don't want to let attackers know when they have a good username
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } else {
    res.status(400).json({
      message:
        "please provide username and password and the password should be alphanumeric",
    });
  }
});

module.exports = router;
