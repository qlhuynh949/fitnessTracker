const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./config')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(e => console.error(e))