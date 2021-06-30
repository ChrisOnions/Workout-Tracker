const router = require("express").Router();
const Workout = require("../models/Workout.js");

// - API - Routes
// - getLastWorkout     - /API                  - GET
// - addExercise        - /api/workouts         - PUT 
// - createWorkout      - /api/workouts/" + id  - POST
// - getWorkoutsInRange - /api/workouts/range   - GET


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
// getLastWorkout
// addExercise
// createWorkout
// getWorkoutsInRange

// /api/workouts/range
// Get Workout in range
// PUT add exercise 
module.exports = router;