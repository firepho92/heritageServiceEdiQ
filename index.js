const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const { tokenVerification } = require('./middleware/tokenVerification')
const publicRoutes = require('./routes/publicRoutes')
const editorRoutes = require('./routes/editorRoutes')
const { dbData } = require('./config')

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

app.use(express.static('public'))

app.use('/', publicRoutes)

app.use(tokenVerification)

app.use('/', editorRoutes)

mongoose.connect(dbData().url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err, res) => {
  if(err) console.log('Error connecting to database: ' + err)
  return true
})

app.listen(8500, () => console.log('Escuchando en el puerto 8500'))