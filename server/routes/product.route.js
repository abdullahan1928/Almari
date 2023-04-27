const express = require("express");
const router = express.Router();
const {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductsBycategories
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/categories/:categories", getProductsBycategories);

module.exports = router;