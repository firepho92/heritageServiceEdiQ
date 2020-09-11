const { Router } = require('express')
const { postProduct, putProduct } = require('../controllers/productsController')

const router = Router()

//Products
router.post('/products', postProduct)
routes.put('/products', putProduct)

module.exports = router