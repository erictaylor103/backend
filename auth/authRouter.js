const express = require('express');
const router = express.Router();
//const validateUser = require('../middleware/validateuser.js');
const { register, login } = require('./authController');


router.post('/register', register);
router.post('/login', login);





module.exports = router;