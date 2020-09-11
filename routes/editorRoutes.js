const { Router } = require('express')
const { postProduct, putProduct } = require('../controllers/productsController')

const router = Router()

router.post('/products', postProduct)
routes.put('/products', putProduct)

module.exports = router