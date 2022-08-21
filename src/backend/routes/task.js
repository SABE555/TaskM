const router = require("express").Router();
let Task = require("../models/task.models");

router.route("/").get((req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
   const description = req.body.description;
   const date = Date.parse(req.body.date);

  const newTask = new Task({
     description,
     date,
  });

  newTask
    .save()
    .then(() => res.json("Task added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Task.findById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json("Task deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Task.findById(req.params.id)
    .then((task) => {
       task.description = req.body.description;
       task.date = Date.parse(req.body.date);

      task
        .save()
        .then(() => res.json("task updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
