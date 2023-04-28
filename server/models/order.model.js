const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, "User ID is required"],
    },
    products: {
        type: Array,
        required: [true, "Products is required"],
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
    },
    address: {
        type: Object,
        required: [true, "Address is required"],
    },
    status: {
        type: String,
        default: "pending",
    },
},
    { timestamps: true }
);

Order = mongoose.model("order", OrderSchema);

module.exports = Order; 