const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/routes.user.js');

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