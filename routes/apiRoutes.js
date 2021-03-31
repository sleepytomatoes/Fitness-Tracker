const router = require("express").Router();
const Workout = require("../models/Workout");

// pulls all workouts from the db, renders the last workout onto the index.html page

router.get("/api/workouts", (req, res) => {

    Workout.find({})
     .then(dbWorkout => {
         res.json(dbWorkout);
     })
     .catch(err => {
         res.status(400).json(err);
     });
});

// pulls all workouts from the db for the stats.html page

router.get("/api/workouts/range", function(req, res) {

    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// post request creates a new workout for db

router.post("/api/workouts", ({ body }, res) => {

    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// put request adds a new exercise to last workout using id

router.put("/api/workouts/:id", function(req, res) {

    Workout.updateOne(
        {
            _id: req.params.id
        },
        {
            $push: {
                exercises: req.body
            }
        }
    ).then(function(dbWorkout) {
        res.json(dbWorkout);
    });
});

module.exports = router;