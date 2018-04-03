
exports.up = function(knex, Promise) {
  return knex.schema.createTable('minidiscs', (table) => {
   // TABLE COLUMN DEFINITIONS HERE
   table.increments()
   table.string('title', 255).notNullable().defaultTo('')
   table.string('artist', 255).notNullable().defaultTo('')
   table.string('genre', 255).notNullable().defaultTo('')
   table.text('description').notNullable().defaultTo('')
   table.text('cover_url').notNullable().defaultTo('')
   table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('minidiscs')
};
