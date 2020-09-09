const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
  title: String,
  price: Double,
  cover: String,
  pages: { type: Array, default: [] },
  author: { type: Object },
  created: { type: Date },
  status: { type: Boolean }
})

module.exports = mongoose.model('Product', Product)