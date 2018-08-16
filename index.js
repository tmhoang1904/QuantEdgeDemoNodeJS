var express = require('express');
var app = express();
var cors = require('cors');
var DataProvider = require('./DataProvider');

app.use(cors());

var port = process.env.PORT || 8080;

app.get('/api/getdata', function(req, res) {
  const data = DataProvider.getInitData();

  res.send({ data });
});

var server = app.listen(port, function() {
  var host = server.address().address;

  console.log('Quant Edge demo app listening at http://%s:%s', host, port);
});
