const router = require("express").Router();
const Workout = require("../models/Workout.js");

// - API - Routes
// - getLastWorkout     - /API                  - GET \\
// - addExercise        - /api/workouts         - PUT 
// - createWorkout      - /api/workouts/" + id  - POST \\
// - getWorkoutsInRange - /api/workouts/range   - GET

// Get all workouts and add the total duration
router.get("/api/workouts", async ({ body }, res) => {
  try {
    const workout = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        }
      },
    ])
    res.json(workout);
  } catch (err) {
    res.status(400).json(err);
  }
})
// POST new workout / create workout
router.post('/api/workouts', async ({ body }, res) => {
  try {
    const workout = await Workout.create(body)
    if (workout) {
      res.status(200).json(workout)
    }
  } catch (err) {
    res.status(400).json(err)
  }
})

// http://localhost:3000/exercise?id=60e15647e936304fc8dd9e9e
router.put("/api/workouts/:id", async (req, res) => {
  try {
    let urlData = req.params;
    let body = req.body;
    const updateData = await Workout.updateOne({ _id: urlData.id }, {
      $push: {
        exercises: body
      }
    })
    res.status(200).json(updateData);
  } catch (err) {
    res.json(err);
  }
});

// Get All workouts in range
router.get('/api/workouts/range', async ({ body }, res) => {
  try {

    const workout = await Workout.find({})
    if (workout) {
      console.log(body);
      res.status(200).json(workout)
    }
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;