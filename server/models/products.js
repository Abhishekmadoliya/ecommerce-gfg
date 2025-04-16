const mongoose = require('mongoose');
const { products } = require('../data/products');


const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
    unique: true,
    required: true,
  },
  images: [
    {
      url: String,
      alt: String,
    }
  ],
  specifications: {
    type: Map,
    of: String,
  },
  ratings: {
    average: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  reviews: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      rating: Number,
      comment: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    }
  ],
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller',
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Products=  mongoose.model('Product', productSchema);
module.exports = Products;
