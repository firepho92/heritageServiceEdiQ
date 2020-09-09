const jwt = require('jsonwebtoken')

const signin = (req, res) => {
  const { user } = req.body
  const token = jwt.sign(user, 'pana', {
    expiresIn: 60 * 60 * 24
  })
  console.log(token)
  res.send(token)
}

module.exports = {
  signin
}