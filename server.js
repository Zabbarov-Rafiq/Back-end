const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: "https://premium-cars-frontend.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));
app.use(cors());

const carRoutes = require("./routes/carRoutes");
app.use("/api/cars", carRoutes);

app.get("/", (req, res) => {
    res.send("PremiumCars Backend 🚗");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});