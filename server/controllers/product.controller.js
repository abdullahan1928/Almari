const Product = require('../models/product.model');

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Get a single product
exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            throw new Error("Product not found");
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Create a new product
exports.addProduct = async (req, res) => {
    try {
        const { name, categories, price, imageUrl } = req.body;
        if (!name || !categories || !price || !imageUrl) {
            throw new Error("Missing required fields");
        }
        const product = new Product({
            name,
            imageUrl,
            price,
            categories,
        });
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// Edit Product
exports.updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        if (!product) {
            throw new Error("Product not found");
        }
        const { name, categories, price, imageUrl } = req.body;
        if (name) {
            product.name = name;
        }
        if (categories) {
            product.categories = categories;
        }
        if (price) {
            product.price = price;
        }
        if (imageUrl) {
            product.imageUrl.push(...imageUrl);
        }
        await product.save();
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// Delete Product
exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findByIdAndDelete(productId);
        if (!product) {
            throw new Error("Product not found");
        }
        res.send({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// Get products by categories
exports.getProductsBycategories = async (req, res) => {
    try {
        const { categories } = req.params;
        const products = await Product.find({ categories: { $in: [categories] } });
        res.json(products);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
}
