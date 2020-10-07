const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post('/', function (req, res) {
  res.send('You Posted something')
})
app.patch('/', function (req, res) {
  res.send('You patched something')
})
app.delete('/', function (req, res) {
  res.send('You deleted something')
})

app.listen(3000)
