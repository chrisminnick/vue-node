const express = require('express');
const app = express();
const articles = require('./routes/api/mongoRouter');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use('/api', articles);

app.get('/', (req, res) => {
  res.send('This is the home page');
});

async function connect() {
  await mongoose.connect('mongodb://localhost:27017/test');
  console.log('database is created.');
}
try {
  connect();
} catch (e) {
  console.error(e);
}

const server = app.listen(process.env.port || 3000, () => {
  console.log('mongoApp Listening on port ' + server.address().port);
});
