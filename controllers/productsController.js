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

  } catch(e) {
    
  }
}

module.exports = {
  getProducts,
  postProduct
}