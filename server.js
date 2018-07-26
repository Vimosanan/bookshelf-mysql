var express = require('express');

var app = express();


app.get('/', (req, res) => {
  res.send('Hi Dear!');
});

app.listen(3000);
