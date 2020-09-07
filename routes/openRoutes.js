const { Router } = require('express')
const { getProducts } = require('../controllers/productsController')

const router = Router()

//router.get('/producto/:id')
router.get('/productos', getProducts)

//Authentication
router.post('/authentication')