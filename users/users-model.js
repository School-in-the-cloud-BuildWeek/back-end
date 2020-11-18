const db = require("../data/connection");

module.exports = {
  findVolunteers,
  findStudents,
  findBy,
  add,
};

function findVolunteers(role) {
  return db("users").where("role", role).orderBy("id");
}

function findStudents(role) {
  return db("users").where("role", role).orderBy("id");
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user);

    return findBy({ id: id });
  } catch (error) {
    throw error;
  }
}
