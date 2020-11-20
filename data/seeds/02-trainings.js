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
        {
          name: "React",
          date: "11-27-2020",
          time: "3:30PM",
          notes: "Intro to React",
        },
        {
          name: "CS",
          date: "12-16-2020",
          time: "2:45PM",
          notes: "Intro to Python, C++, and algorithms",
        },
      ]);
    });
};
