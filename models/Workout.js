const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: { 
      type: String, 
      required: true 
    },
  name: { 
      type: String, 
      required: true 
    },
  weight: { 
      type: Number, 
      required: false 
    },
  sets: { 
      type: Number, 
      required: false 
    },
  reps: { 
      type: Number, 
      required: false 
    },
  duration: { 
      type: Number, 
      required: false 
    },
  distance: { 
      type: Number, 
      required: false 
    },
  date: { 
      type: Date, 
      default: Date.now 
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
