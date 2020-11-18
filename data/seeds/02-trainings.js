exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("trainings")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("trainings").insert([
        {
          name: "Canvas Training",
          date: "11-24-2020",
          time: "2:00PM",
        },
      ]);
    });
};
