const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    marka: String,
    model: String,
    yusus: String,
    elaqeNomresi: String,
    masininSekli: String,
    tesvir: String,
    yancaq: String,
    masininIli: String,
    masininSahibi: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Car", carSchema);