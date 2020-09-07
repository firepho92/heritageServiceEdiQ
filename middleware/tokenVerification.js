const jwt = require('jsonwebtoken')

const tokenVerification = (req, res, next) => {
  const token = req.body.token
  console.log(token)
  const str = jwt.decode(token)
  console.log(str)
  next()
}

module.exports = {
  tokenVerification
}