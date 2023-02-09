const express = require("express");
const router = express.Router();
const productController = require("../Controllers/productController");

router.post("/create", productController.create);
router.get("/", productController.productList);
router.delete("/:id", productController.delete);
router.patch("/:id/update_quantity", productController.updateQuantity);

module.exports = router;
