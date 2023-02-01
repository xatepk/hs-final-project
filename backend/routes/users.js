const express = require('express');
const controlles = require('../controllers/users');
const router = express.Router();
const { createUser, getUsers, login } = controlles;


router.post('/signup', createUser);
router.get('/users', getUsers);
router.post('/signin', login);

module.exports = router;