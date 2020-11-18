exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
    })
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
      tbl.string("email", 128).notNullable().unique();
      tbl.string("password", 256).notNullable();
      tbl.string("confirmPassword", 256).notNullable();
      tbl.string("phone").unique();
      tbl.string("location");
      tbl
        .integer("role")
        .unsigned()
        .references("id")
        .inTable("roles")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("roles");
};
