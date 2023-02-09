const handleErrors = require("../Midddleware/errorHandler");
const Product = require("../Models/product");

// Add product
module.exports.create = handleErrors(async (req, res) => {
	const { name, quantity } = req.body;
	const product = new Product({ name, quantity });
	await product.save();
	res.status(201).json({ product });
});

// List products
module.exports.productList = handleErrors(async (req, res) => {
	const products = await Product.find();
	res.json({ products });
});

// Delete product
module.exports.delete = handleErrors(async (req, res) => {
	await Product.findByIdAndDelete(req.params.id);
	res.json({ message: "product deleted" });
});

// Update quantity
module.exports.updateQuantity = handleErrors(async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (!product) return res.json({ message: "product not found" });
	product.quantity += parseInt(req.query.number);
	await product.save();
	res.json({ product, message: "updated successfully" });
});
