const router = require('express').Router(),
      {Users, Thoughts, Reactions} = require('../../models');
const {usersController} = require("../../controllers");
router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createUsers);


router.route('/:userId')
    .get(usersController.getUsersById)
    .put(usersController.updateUsers)
    .delete(usersController.deleteUsers);


router.route('/:userId/friends/:friendId')
    .put(usersController.addFriend)
    .delete(usersController.deleteFriend);



module.exports = router;