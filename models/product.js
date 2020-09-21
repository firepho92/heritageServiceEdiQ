const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
  title: { type: String },
  price: { type: Number },
  cover: { type: String },
  pages: { type: Array, default: [] },
  author: { type: Object },
  created: { type: Date },
  status: { type: Boolean },
  level: { type: String },
  grade: { type: String },
  subject: { type: String },
  trimester: { type: String },
  baseColor: { type: String }
})

module.exports = mongoose.model('Product', Product)