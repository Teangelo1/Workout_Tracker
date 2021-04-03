const app = require("express").Router();
const Workout = require("../public/workout");


app.post("/api/workouts", ({body}, res) => {
    console.log("workout added")
    Workout.create(body)
    .then(dbworkout => {
        res.json(dbworkout);
    }).catch(err => {
        res.status(400).json(err);
    })
})
