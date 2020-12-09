const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema
({
    name: String,
    type: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,

    date: {
        type: Date,
        default: Date.now
      }

});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;