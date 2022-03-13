const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('http://localhost:3000 GET method');
});
const server = app.listen(process.env.port || 3000, () => {
  console.log('Listening on port ' + server.address().port);
});
