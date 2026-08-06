const Car = require("../models/Car");

// GET
const getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST
const addCar = async (req, res) => {
    try {
        const newCar = await Car.create(req.body);

        res.status(201).json({
            success: true,
            message: "Car added successfully!",
            car: newCar
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// DELETE
const deleteCar = async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Car deleted successfully!"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// PUT
const editCar = async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json({
            success: true,
            message: "Car updated successfully!",
            car: updatedCar
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getCars,
    addCar,
    deleteCar,
    editCar
};