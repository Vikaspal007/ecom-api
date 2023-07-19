// controllers/productController.js
const Product = require('../models/product');

// Add a product to the database
exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = await Product.create({ name, quantity });
    res.json({ product });
  } catch (error) {
    res.status(500).json({ error: 'Unable to add the product' });
  }
};

// List all products
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve products' });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete the product' });
  }
};

// Update the quantity of a product
exports.updateProductQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { number } = req.query;
    const product = await Product.findByIdAndUpdate(
      id,
      { $inc: { quantity: Number(number) } },
      { new: true }
    );
    res.json({ product, message: 'Updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to update the product quantity' });
  }
};
