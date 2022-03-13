const express = require('express');
const app = express();
const articles = require('./routes/api/articles.js');
app.use('/articles', articles);

app.get('/', (req, res) => {
  res.send('This is the home page');
});

const server = app.listen(process.env.port || 3000, () => {
  console.log('Listening on port ' + server.address().port);
});
