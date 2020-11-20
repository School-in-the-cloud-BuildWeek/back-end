const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  const adminPassword = "admin";
  const password = "pass";
  const rounds = process.env.BCRYPT_ROUNDS || 10;
  const adminHash = bcrypt.hashSync(adminPassword, rounds);
  const hash = bcrypt.hashSync(password, rounds);

  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Admin",
          email: "admin@email.com",
          password: adminHash,
          role: 1,
        },
        {
          name: "Bilbo",
          email: "bilbo@email.com",
          password: hash,
          role: 3,
        },
        {
          name: "Frodo",
          email: "frodo@email.com",
          password: hash,
          role: 2,
        },
        {
          name: "Samwise",
          email: "samwise@email.com",
          password: hash,
          role: 2,
        },
      ]);
    });
};
