const app = require("express").Router();
const Workout = require("../models/workouts");

// Adding a new workout
app.post("/api/workouts", ({ body }, res) => {
    console.log("new workout")
    Workout.create(body).then(dbworkout => {
            res.json(dbworkout);
        }).catch(err => {
            res.json(err);
        })
});

// giving us our last workout

app.get("/api/workouts", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
        }
      }
    ])
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  

// giving us our results
app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then(dbworkout => {res.json(dbworkout)
    }).catch(err => {res.json(err)})
});

// Adds an exercise
app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,

        { $push: { exercises: req.body } },
        { new: true }

    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

/*
Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" }
      }
    }
  ])
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
*/

module.exports = app;