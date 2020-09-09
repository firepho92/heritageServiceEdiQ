const { Router } = require('express')
const { postProduct } = require('../controllers/productsController')

const router = Router()

router.post('products', postProduct)

module.exports = router