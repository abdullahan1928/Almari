const Category = require('../models/category.model')

// Get all categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Get one category by Id
exports.getCategory = async (req, res) => {
    res.status(200).json(res.category)
}

// Add new category
exports.addCategory = async (req, res) => {
    const category = new Category({
        title: req.body.title,
        imageUrl: req.body.imageUrl
    })
    try {
        const newCategory = await category.save()
        res.status(201).json(newCategory)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Update category
exports.updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Delete category
exports.deleteCategory = async (req, res) => {
    console.log(req.params.id);
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.json({ message: "Category deleted successfully." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}