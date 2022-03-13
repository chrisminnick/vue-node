require('dotenv').config(); // new
const express = require('express');
//const articles = require('./routes/api/articles')
const articles = require('./routes/api/mongoRouter');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use('/api', articles); // change this

const db = require('./model');
console.log(db.url);

async function connect() {
  await mongoose.connect(db.url);
  //  await mongoose.connect("mongodb://localhost:27017/test")
  console.log('database is created');
}

connect();

app.get('/', (req, res) => {
  res.send('This is the home page');
});

const server = app.listen(process.env.port || 3000, () => {
  console.log('Listening on port - mongoApp ' + server.address().port);
});
