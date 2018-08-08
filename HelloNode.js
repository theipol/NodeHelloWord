var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hola Mundo 2018!');
});
app.listen(3000, function () {
  console.log('Ejemplo escuchando en puerto 3000!');
});