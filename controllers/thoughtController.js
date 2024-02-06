const { ObjectId } = require("mongoose").Types;
const { Users, Thoughts } = require("../models");

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const thought = await Thoughts.find();
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get one thought
  async getOneThought(req, res) {
    try {
      const thought = await Thoughts.findOne({ _id: req.params.id }).select(
        "-__v"
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID." });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // create new thought
  async addThought(req, res) {
    try {
      const thought = await Thoughts.create(req.body);
      const user = await Users.findOneAndUpdate(
        { username: thought.username },
        { $addToSet: { thoughts: thought._id } },
        { runValidators: true, new: true }
      );
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // edit a thought
  async editThought(req, res) {
    try {
      const thought = await Thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thoughts.findOneAndRemove(
        { _id: req.params._id },
        { $pull: { thoughts: req.body } },
        { runValidators: true }
      );
      return res.status(200).json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // addReaction
  // req.params / req.bosy
  // thought findOneAnd Update by id through params
  // push reactions from req.body
  // delete params only-no body thought findOneANdUpdate by id  for reaction id
};
