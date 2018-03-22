var express = require('express');
var app = express();

app.get('/whois', function (req, res) {
  res.send('AlertNow');
});

app.listen(3300, function () {
  console.log('Example app listening on port 3300 !');
});

