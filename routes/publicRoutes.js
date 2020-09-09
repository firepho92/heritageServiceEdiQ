const { Router } = require('express')
const { getProducts, postProduct } = require('../controllers/productsController')
const { signin } = require('../controllers/authenticationController')

const router = Router()

//router.get('/producto/:id')
router.get('/products', getProducts)

//Authentication
router.post('/authentication', signin)

module.exports = router