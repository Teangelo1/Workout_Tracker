const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true
            },


            name: {
                type: String,
                trim: true,
            },


            weight: {
                type: Number,
            },

            duration: {
                type: Number,
            },

            reps: {
                type: Number,
            },

            sets: {
                type: Number,
            },

            distance: {
                type: Number,
            }

        }

    ]
});


module.exports = workout;