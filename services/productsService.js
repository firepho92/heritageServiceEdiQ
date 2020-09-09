const mongoose = require('mongoose')
const productSchema = require('../models/product')
const ProductModel = mongoose.model('Product')

const readProducts = async () => {
  try {
    return await readProductsDB()
  } catch(e) {
    console.log(e)
    throw e
  }
}

const createProduct = async (product) => {
  try {
    const newProduct = new ProductModel(product)
    return await newUser.save()
  } catch (e) {
    throw e
  }
}

module.exports = {
  readProducts,
  createProduct
}