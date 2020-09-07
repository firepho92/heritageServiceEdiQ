const readProducts = async () => {
  try {
    return await readProductsDB()
  } catch(e) {
    console.log(e)
    throw e
  }
}

module.exports = {
  readProducts
}