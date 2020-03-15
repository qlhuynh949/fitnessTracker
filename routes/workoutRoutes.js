const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts', (req, res) => Workout.find()
  .then(Workout => res.json(Workout))
  .catch(e => console.error(e)))


router.get('/excercise/:id', (req, res) => Workout.findById(req.params.id)
  .populate('excercises')
  .then(Workout => res.json(Workout))
  .catch(e => console.error(e)))


router.get('/workouts/:id', (req, res) => {
  if (req.params.id.toLowerCase() !== 'range') {
    Workout.findById(req.params.id)
      .then(Workout => res.json(Workout))
      .catch(e => console.error(e))


  }
  else {
    Workout.find()
      .then(Workout => res.json(Workout))
      .catch(e => console.error(e))

  }

})


// PUT one workouts
router.put('/workouts/:id', (req, res) => {
  Workout.findById(
    req.params.id
  )
    .then((workout) => {
      workout.exercises.push(req.body)
      workout.save()
      res.json(workout)

    })
    .catch(e => console.error(e))
})



router.post('/workouts', (req, res) => Workout.create(req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

module.exports = router
