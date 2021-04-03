const app = require("express").Router();
const Workout = require("../public/workout");

// Adding a new workout
app.post("/api/workout", ({ body }, res) => {
    console.log("new workout")
    Workout.create(body)
        .then(dbworkout => {
            res.json(dbworkout);
        }).catch(err => {
            res.status(400).json(err);
        })
})


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