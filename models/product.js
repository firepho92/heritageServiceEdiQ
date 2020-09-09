const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
  title: { type: String },
  price: { type:  },
  cover: { type: String },
  pages: { type: Array, default: [] },
  author: { type: Object },
  created: { type: Date },
  status: { type: Boolean }
})

module.exports = mongoose.model('Product', Product)