exports.up = function (knex) {
  return knex.schema.createTable("trainings", (tbl) => {
    tbl.increments();
    tbl.string("name", 128).notNullable();
    tbl.date("date").notNullable();
    tbl.time("time").notNullable();
    tbl.text("notes", 256);
    tbl
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("trainings");
};
