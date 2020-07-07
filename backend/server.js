const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

var app = express();
app.use(cors());

const port = process.env.PORT || 5000;

mongoose.connect(process.env.ATLUS_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('mongoose connection established')
});

app.listen(port, (req, res) => {
    console.log('Server online on port: ' + port);
})