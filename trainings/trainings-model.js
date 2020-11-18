const db = require("../data/connection");

module.exports = {
  find,
  findBy,
  add,
};

function find() {
  return db("trainings").orderBy("id");
}

function findBy(filter) {
  return db("trainings").where(filter).orderBy("id");
}

async function add(training) {
  try {
    const [id] = await db("trainings").insert(training);

    return findBy({ id: id });
  } catch (error) {
    throw error;
  }
}
