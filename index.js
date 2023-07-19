// index.js
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.use('/products', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
