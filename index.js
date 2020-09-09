const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { tokenVerification } = require('./middleware/tokenVerification')
const publicRoutes = require('./routes/publicRoutes')
const editorRoutes = require('./routes/editorRoutes')

const app = express()

app.use(morgan('combined'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

app.use('/', publicRoutes)

app.use(tokenVerification)

app.use('/', editorRoutes)

app.listen(8500, () => console.log('Escuchando en el puerto 8500'))