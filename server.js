const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 9090;
const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/trivia', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to mongodb');
});

app.use(express.static(__dirname + '/dist/trivia'));

app.use('/api', bodyParser.urlencoded({ extended: false }), bodyParser.json(), routes);

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/trivia/index.html');
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));


