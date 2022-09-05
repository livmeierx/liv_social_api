const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts GET all and POST
router.route('/').get(getThought).post(createThought);

// GET one thought, PUT and DELETE by Id
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// POST new reactions
router.route('/:thoughtId/reactions')
.post(createReaction);

// DELETE reaction by Id
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;