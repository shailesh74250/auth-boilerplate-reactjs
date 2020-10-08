

exports.userControllerLogin = function(req, res, next) {
	res.json({"login": req.body})
}

exports.userControllerRegister = function(req, res, next) {
	res.json({"user": req.body})
}