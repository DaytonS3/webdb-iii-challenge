exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", function(tbl) {
    tbl.increments();

    tbl.text("name").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("students");
};
