const { Router } = require('express')
const { postProduct, putProduct } = require('../controllers/productsController')

const router = Router()

//Products
router.post('/products', postProduct)
router.put('/products', putProduct)

module.exports = router