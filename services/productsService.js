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
    return await newProduct.save()
  } catch (e) {
    throw e
  }
}

const updateProduct = async (productUpdated) => {
  try{
    console.log(productUpdated)
    //const product = await ProductModel.findOneAndUpdate(productUpdated._id, pro)
  } catch(e) {

  }
}

module.exports = {
  readProducts,
  createProduct,
  updateProduct
}