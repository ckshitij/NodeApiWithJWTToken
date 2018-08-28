const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
const User = require('../models/user.model');
var verifyToken = require('../Verifytoken');


// Require the controllers WHICH WE DID NOT CREATE YET!!
const controller = require('../controllers/controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', controller.test);
router.post('/register',controller.register);
router.post('/login',controller.login);

router.get('/me', Verifytoken,controller.verify);
router.get('/logout',controller.logout);

module.exports = router;