const mongoose = require('mongoose');
const User = require('../models/model.user');

exports.userControllerLogin = function(req, res, next) {
	res.json({"login": req.body})
}

exports.userControllerRegister = function (req, res, next) {

	User.find({ email: req.body.email }).then(user => {
		if (user.length >= 1) {
			return res.status(409).json({
				message: "Mail Exist"
			});
		}
		const userObj = new User({
			_id: new mongoose.Types.ObjectId(),
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
		});
		userObj.save()
			.then(result => res.status(201).json({
				message: "User Created"
			})).catch(err => {
				res.status(500).json({
					error: err
				})
			});
	}

	).catch(err => {
		res.status(500).json({
			error: err
		})
	}	
	)
	res.json({ "user": req.body });
	
}