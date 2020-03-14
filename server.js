require('dotenv').config()
const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))

})

app.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, './public/exercise.html'))

})

app.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, './public/stats.html'))

})
require('./config')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(e => console.error(e))