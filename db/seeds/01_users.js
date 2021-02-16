exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const users = [
    {
      username: "Mary Ju",
      password: "Iamgroot!",
    },
    {
      username: "Rose Lin",
      password: "keepitsecret,keepitsafe.",
    },
    {
      username: "Mark Wang",
      password: "changethepass",
    },
    {
      username: "Allen Hu",
      password: "hasnorole",
    },
    {
      username: "Nancy Ou",
      password: "hasnorole",
    },
  ];

  return knex("users").insert(users);
};
