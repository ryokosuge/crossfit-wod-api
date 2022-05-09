const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");
const express = require("express");
const router = express.Router();

router.get("/", workoutController.getAllWorkouts);
router.get("/:workoutId", workoutController.getOneWorkouts);
router.get("/:workoutId/records", recordController.getRecordsForWorkout);
router.post("/", workoutController.createNewWorkout);
router.patch("/:workoutId", workoutController.updateOneWorkout);
router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
