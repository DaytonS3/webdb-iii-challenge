exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { name: "nameValue1" },
        { name: "nameValue2" },
        { name: "nameValue3" }
      ]);
    });
};
