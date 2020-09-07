const { Router } = require('express')
const { getProducts } = require('../controllers/productsController')
const { signin } = require('../controllers/authenticationController')

const router = Router()

//router.get('/producto/:id')
router.post('/', (req, res) => res.sendStatus(200))
router.get('/productos', getProducts)

//Authentication
router.post('/authentication', signin)

module.exports = router