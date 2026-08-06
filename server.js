const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// MongoDB
connectDB();

// Middleware
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// Routes
const carRoutes = require("./routes/carRoutes");
app.use("/api/cars", carRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("PremiumCars Backend 🚗");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});