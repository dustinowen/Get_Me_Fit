const express = require("express");
const router = express.Router();
const workoutCtrl = require("../controllers/workouts");

router.get("/", workoutCtrl.index);
router.get("/new", workoutCtrl.new);
router.get("/:id", workoutCtrl.show);
router.get("/:id/edit", workoutCtrl.edit)

router.post("/", workoutCtrl.create);

router.delete("/:id", workoutCtrl.delete)

router.put("/:id", workoutCtrl.update)

module.exports = router;