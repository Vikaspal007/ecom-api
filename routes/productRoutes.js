// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Add a product to the database
router.post('/create', productController.createProduct);

// List all products
router.get('/', productController.listProducts);

// Delete a product by ID
router.delete('/:id', productController.deleteProduct);

// Update the quantity of a product
router.post('/:id/update_quantity', productController.updateProductQuantity);

module.exports = router;
