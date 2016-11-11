var express = require('express')
var app = express()

app.get('/', function (req, res) {

  var q = req.query;
  var a = q.a;
  var b = q.b;
  a = 'a' in q? a-0: 0;
  b = 'b' in q? b-0: 0;
  
  console.log(q);

  res.send('result: ' + (a+b));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})