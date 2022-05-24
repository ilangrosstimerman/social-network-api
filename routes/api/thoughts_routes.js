const router = require('express').Router();
const {thoughtsController} = require('../../controllers');


//define routes + apply controls
router.route('/')
    .get(thoughtsController.getAllThoughts);

router.route("/:id")
    .get(thoughtsController.getThoughtsById)
    .put(thoughtsController.updateThoughts)
    .delete(thoughtsController.deleteThoughts);

router.route("/:userId")
    .post(thoughtsController.createThoughts)

router.route("/:thoughtId/reactions")
    .post((req, res)=>{
        thoughtsController.addReaction(req, res)
    });
router.route("/:thoughtId/reactions/:reactionId")
    .delete(thoughtsController.deleteReaction);

//export routes
module.exports = router;