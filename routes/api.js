const router = require("express").Router();
const Transaction = require("../models/transaction.js");

// http://127.0.0.1:5500/ - Fitness tracker
// public/stats.html 
// public/index.html  
// public/exercise.html - Continue Workout
// exercise? 
router.get("/api/", (req, res) => {

  res.json(Transaction);
});
// 
// 
module.exports = router;