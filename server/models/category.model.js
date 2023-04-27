const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: true,
    },
    imageUrl: {
        type: String,
        required: [true, "Image is required"],
    }
},
    { timestamps: true }
);

Category = mongoose.model("category", CategorySchema);

module.exports = Category; 