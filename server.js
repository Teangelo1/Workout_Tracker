// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Setting up Express Here

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Our Routes 

app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));

// Starts our server

app.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:3000 in your browser.",
        PORT,
        PORT
      );
})