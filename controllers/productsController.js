const { createProduct, updateProduct } = require('../services/productsService')
const { update } = require('../models/product')

const getProducts = async (req, res) => {
  try {
    const products = await readProducts()
    res.send(products)
  } catch(e) {
    console.log(e)
    res.sendStatus(500)
  }
}

const postProduct = async (req, res) => {
  const { product } = req.body
  try {
    const result = await createProduct(product)
    res.status(201).send(result)
  } catch(e) {
    console.log(e)
    res.sendStatus(500)
  }
}

const putProduct = async (req, res) => {
  const { product } = req.body
  try {
    const result = await updateProduct(product)
    res.status(200).send(result)
  } catch(e) {
    console.log(e)
    res.sendStatus(500)
  }
}

module.exports = {
  getProducts,
  postProduct,
  putProduct
}