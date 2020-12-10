const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema
({
  exercises: [
    {
      type: {
        type: String,
        trim: true
      },
      name: {
        type: String,
        trim: true
      },
      duration: {
        type: Number,
      },
    
      weight: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0
  },
    date: {
        type: Date,
        default: Date.now
      }

});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;