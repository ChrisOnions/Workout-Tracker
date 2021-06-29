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


// router.get("/api/transaction", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });


// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });


module.exports = router;