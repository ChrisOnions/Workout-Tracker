const router = require("express").Router();
const Workouts = require("../models/workouts");

// - API - Routes
// - getLastWorkout     - /API                  - GET
// - addExercise        - /api/workouts         - PUT 
// - createWorkout      - /api/workouts/" + id  - POST
// - getWorkoutsInRange - /api/workouts/range   - GET


router.get("/api/workout", async ({ body }, res) => {
  const stats = await stats.get(Workouts)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
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