const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts', (req, res) => Workout.find()
  .then(Workout => res.json(Workout))
  .catch(e => console.error(e)))


router.get('/excercise/:id', (req, res) => Workout.findById(req.params.id)
  .populate('excercises')
  .then(Workout => res.json(Workout))
  .catch(e => console.error(e)))


router.get('/workouts/:id', (req, res) => Workout.findById(req.params.id)
  .populate('excercises')
  .then(Workout => res.json(Workout))
  .catch(e => console.error(e)))


// PUT one workouts
router.put('/workouts/:id', (req, res) => Workout.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))



router.get('/workouts/range', (req, res) => Workout.find()
  .populate('excercises')
  .then(Workout => res.json(Workout))
  .catch(e => console.error(e)))


router.post('/workouts', (req, res) => Workout.create(req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

module.exports = router
