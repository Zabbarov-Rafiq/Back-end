const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log("Trying MongoDB...");
        
        await mongoose.connect(process.env.MONGO_URI, {
            family: 4
        });

        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;