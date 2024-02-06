const router= require('express').Router();
const {
    addThought,
    deleteThought,
    editThought,
    getAllThoughts,
    getOneThought
}=require('../../controllers/thoughtController');


// get all thoughts and add thoughts
router.route('/').get(getAllThoughts).post(addThought);

// get one thought/delte thought/edit thought
router.route('/:thoughtId').get(getOneThought).delete(deleteThought).put(editThought);

// router.route('/:id/reactions').post(addReaction)

// router.route('/:id/reactions/:reactionId).delete(deleteReaction)

module.exports= router;