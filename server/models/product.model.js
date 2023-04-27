const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Title is required"],
    },
    imageUrl: {
        type: String,
        required: [true, "Image is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    categories: {
        type: Array,
        required: [true, "Categories is required"],
    },
},
    { timestamps: true }
);

Product = mongoose.model("product", ProductSchema);

module.exports = Product; 