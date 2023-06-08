const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

/* logearse*/
router.post("/login", userController.login);

module.exports = router;