const db = require("../db/dbConfig");

module.exports = {
  find,
};

function find() {
  return db("users");
}
