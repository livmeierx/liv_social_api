const { User, Thought } = require("../models");

// Get all users
module.exports = {
    getUser(req, res) {
        User.find({})
        .then ((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

// Get a single user
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId})
        .populate("thoughts")
        .populate("friends")
        .select("-__v")
        .then((user) =>
        !user
            ? res.status(400).json({ message: "No user found with that ID"})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
// Create a new user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch ((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
// Update a user
    updateUser(req, res) {
        User.findOneAndUpdate (
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) => 
        !user
            ? res.status(400).json({ message: "No user found with that ID"})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
// Delete a user + BONUS: remove a user's associated thoughts when deleted
    deleteUser(req, res) {

    },
// Add a friend
    addFriend(req, res) {

    },
// Delete a friend
    deleteFriend(req, res) {

    },        
};