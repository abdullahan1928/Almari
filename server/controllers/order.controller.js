const Order = require("../models/order.model");

// Get all orders
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Get a single order
exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            throw new Error("Order not found");
        }
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Create a new order
exports.addOrder = async (req, res) => {
    try {
        const { userId, products, amount, address } = req.body;
        if (!userId || !products || !amount || !address) {
            throw new Error("Missing required fields");
        }
        const order = new Order({
            userId,
            products,
            amount,
            address,
        });
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// Edit Order
exports.updateOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findById(orderId);
        if (!order) {
            throw new Error("Order not found");
        }
        const { userId, products, amount, address, status } = req.body;
        if (userId) {
            order.userId = userId;
        }
        if (products) {
            order.products = products;
        }
        if (amount) {
            order.amount = amount;
        }
        if (address) {
            order.address = address;
        }
        if (status) {
            order.status = status;
        }
        await order.save();
        res.send(order);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// Delete Order
exports.deleteOrder = async (req, res) => {
    try {
        console.log(req.params.id);
        const { orderId } = req.params;
        const order = await Order.findById(req.params.id);
        if (!order) {
            throw new Error("Order not found");
        }
        const deletedOrder = await order.deleteOne(); // use deleteOne method instead of remove
        if (deletedOrder.deletedCount === 0) {
            throw new Error("Order could not be deleted");
        }        res.send({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// Get user orders
exports.getUserOrders = async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await Order.find({ userId });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
