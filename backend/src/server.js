const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const { DB_URL } = require('./constants');

const userRoutes = require('./routes/routes.user.js');

// connect with database
mongoose.connect(DB_URL, { useNewUrlParser: true }, function (err, db) {
	if (!err) console.log("Connected!");
});

// middleware
// application/json data
app.use(bodyParser.json());

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/api', userRoutes);

app.listen(4000, () => {
	console.log('listing at 4000');
});