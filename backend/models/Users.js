const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: Number,
  createdAt: {
    type: Date,
    default: Date.now 
  },
  description: { 
    type: String,
    required: true 
  },
  img: [{
    type: String,
    required: true 
  }]
});

const ProductModel = mongoose.model('Product', productSchema); 
module.exports = ProductModel; 
