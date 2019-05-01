exports.up = function(knex, Promise) {
  return knex.schema.createTable("cohorts", function(tbl) {
    tbl.increments();

    tbl.text("name").notNullable();

    tbl
      .integer("cohort_id")
      .references("id")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cohorts");
};
