exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table
      .string('username', 25)
      .notNullable()
      .unique();
    table.string('password').notNullable();
    table.string('department');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
