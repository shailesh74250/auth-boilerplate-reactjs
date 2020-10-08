const express = require('express');
const router = express.Router();
const userController = require('../controllers/controller.user');

router.post('/login', userController.userControllerLogin);
router.post('/register', userController.userControllerRegister);

module.exports = router;