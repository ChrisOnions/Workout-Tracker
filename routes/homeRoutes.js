const { index } = require("../models/workouts");
const router = require("express").Router();
const stats = require('../public/stats.js');
// http://127.0.0.1:5500/ - Fitness tracker
// Public/stats.html 
// Public/index.html  
// Public/exercise.html - Continue Workout
// Exercise? 

router.get("/", async (req, res) => {
  res.render()
});

router.get("/stats", async (req, res) => {
  console.log("hit - stats");
  res.redirect(stats)
});

router.get("/public/index", async (req, res) => {
  console.log("hit - public, index");
});

router.get("/public/exercise", async (req, res) => {

});

router.get("/public/exercise:?", async (req, res) => {

});



module.exports = router;