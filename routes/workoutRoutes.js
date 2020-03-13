const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts', (req, res) => Workout.find()
  .then(items => res.json(items))
  .catch(e => console.error(e)))


router.get('/workouts/:id', (req, res) => Workout.findById(req.params.id)
  .populate('excercise')
  .then(Workout => res.json(Workout))
  .catch(e => console.error(e)))

router.post('/workouts', (req, res) => Workout.create(req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

module.exports = router
