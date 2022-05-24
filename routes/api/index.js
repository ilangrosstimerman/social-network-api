const router = require('express').Router();

const thoughts = require('../api/thoughts_routes');
const users = require('../api/users_routes');


router.use('/thoughts', thoughts);
router.use('/users', users);

module.exports=router;