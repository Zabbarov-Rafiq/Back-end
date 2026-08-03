const express = require("express");

const router = express.Router();

const {
    getCars,
    addCar,
    deleteCar,
    editCar
} = require("../controllers/carController");

router.get("/", getCars);
router.post("/", addCar);
router.put("/:id", editCar);
router.delete("/:id", deleteCar);

module.exports = router;