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

app.get("/api/workouts", (req, res) => {
    Workout.Find({}).then(dbworkout => {res.join(dbworkout);
    }).catch(err => {res.json(err)})
});


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

module.exports = app;