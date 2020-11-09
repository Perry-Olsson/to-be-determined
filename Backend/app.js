const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {res.send('Fack Politics!')})
app.get('/new', (req, res) => {res.send('Fucking Politics!')})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
