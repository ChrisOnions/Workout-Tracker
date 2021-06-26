const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutschema = new Schema({
  day: {
    type: String,
  }
    exercise: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    }
  ]
})

const User = mongoose.model("workout", workoutSchema);
module.exports = User;