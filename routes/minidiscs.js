const express = require('express')
const router = express.Router()
const knex = require('../knex')


// READ ALL records for this table
router.get('/', (req, res, next) => {
  knex('minidiscs')
  .then(result => {
    res.send(result)
  })
  .catch(err => next(err))
})
// READ ONE record for this table
router.get('/:id', (req, res, next) => {
  const { id } = req.params
  knex('minidiscs')
  .where('id', id)
  .then(result => {
    res.json(result)
  })
  .catch(err => next(err))
})
// CREATE ONE record for this table
router.post('/', (req, res, next) => {
  knex('minidiscs')
  .insert({
     "title": req.body.title,
     "artist": req.body.artist,
     "genre": req.body.genre,
     "description": req.body.description,
     "cover_url": req.body.cover_url
  })
  .returning('*')
  .then(result => {
    res.json(result)
  })
  .catch(err => next(err))
})
// UPDATE ONE record for this table
router.put('/:id', (req, res, next) => {
  const { id } = req.params
  knex('minidiscs')
  .where('id', id)
  .then(item => {
    knex('minidiscs')
    .where('id', id)
    .first()
    .update({
      'title': req.body.title,
      'artist': req.body.artist,
      'genre': req.body.genre,
      'description': req.body.description,
      'cover_url': req.body.cover_url,
    })
    .returning('*')
    .then(result => {
      res.send(result)
    })
  })
  .catch(err => next(err))
})
// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  knex('minidiscs')
  .where('id', id)
  .first()
  .then(row => {
    if(!row) return next()
    knex('minidiscs')
    .where('id', id)
    .first()
    .del()
    .then(() => {
      res.send(`ID ${id} has been deleted`)
    })
  })
  .catch(err => {
    next(err)
  })
})
module.exports = router
