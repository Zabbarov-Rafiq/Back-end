const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3000;

// JSON oxumaq üçün
app.use(express.json());
app.use(cors());

// Routes
const carRoutes = require("./routes/carRoutes");

app.use("/api/cars", carRoutes);

app.get("/", (req, res) => {
    res.send("PremiumCars Backend 🚗");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});