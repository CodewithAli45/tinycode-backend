const router = require('express').Router();

const {addUsers} = require('../controller/userController');

router.post('/adduser', addUsers);

module.exports = router;