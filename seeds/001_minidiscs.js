exports.seed = function(knex, Promise) {
// Deletes ALL existing entries
return knex('minidiscs').del()
 .then(function() {
   // Inserts seed entries
   return knex('tablename').insert([
     {id: 1, title: 'Black Hole Sun', artist: 'Soundgarden', genre: 'Rock', description: 'Wont ya come', cover_url: 'soundgarden.jpg'},
     {id: 2, title: 'VS', artist: 'Pearl Jam', genre: 'Rock', description: 'Wonderful', cover_url: 'pearljam.jpg'},
     {id: 3, title: 'Exciter', artist: 'Depeche Mode', genre: 'Alternative', description: 'Sounds like a post-consumer socierty blanketed in a tastey malaise of honey and sadness', cover_url: 'stuff.png'}
   ])
   .then(() => {
     // Moves id column (PK) auto-incrementer to correct value after inserts
     return knex.raw("SELECT setval('minidiscs_id_seq', (SELECT MAX(id) FROM tablename))")
   })
 })
}
