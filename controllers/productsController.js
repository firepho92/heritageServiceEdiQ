const getProducts = async(req, res) => {
  try {
    const products = await readProducts()
    res.send(products)
  } catch(e) {
    console.log(e)
    res.sendStatus(500)
  }
}

module.exports = {
  getProducts
}