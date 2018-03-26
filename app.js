var express = require('express')
var app = express()

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))

app.use('/', function (req, res) {
  res.render('index')
})

app.listen(8080, function () {
  console.log('... ... Listening closely')
})
