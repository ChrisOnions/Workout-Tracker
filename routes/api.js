const router = require("express").Router();
const Transaction = require("../models/transaction.js");


router.get("/api/", (req, res) => {
  res.json(Transaction);
});


// API - Routes
// - getLastWorkout     - /API                  - GET
// - addExercise        - /api/workouts         - PUT 
// - createWorkout      - /api/workouts/" + id  - POST
// - getWorkoutsInRange - /api/workouts/range   - GET


module.exports = router;