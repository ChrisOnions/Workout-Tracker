const router = require("express").Router();
const path = require('path');

// http://127.0.0.1:5500/ - Fitness tracker

router.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

router.get("/stats", async (req, res) => {
  res.sendFile(path.join(__dirname, '../public/stats.html'))
});

router.get("/exercise", async (req, res) => {
  res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

module.exports = router;