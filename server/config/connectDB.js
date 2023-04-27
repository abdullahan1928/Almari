const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        mongoose
            .connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log("MongoDB Connected successfully");
            });
    } catch (error) {
        console.log(`somer error occur ${error}`);
    }
};

module.exports = connectDB;