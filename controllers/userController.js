const {ObjectId} =require('mongoose').Types;
const {Users, Friends, Thoughts}=require('../models');

module.exports= {

    // show all Users
    async allUsers(req, res) {
        try{
            const users =await Users.find();

            res.json(users);
        }catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // get a single user
    async getUser( req, res) {
        try{
            const user= await Users.findOne({ _id: req.params.id}).select('-__v');
            // finds single user using the user id

            if(!user){
                return res.status(404).json({message: 'No user with that ID, please try again!'})
            }

            res.json({
                user,
                thoughts: await Thoughts(req.params.userID),
                friends: await Users(req.params.friends)
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json(err)
        }
    },

    // create new user
    async createUser (req, res) {
        try {
            const user =await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // delete user 
    async deleteUser (req, res) {
        try {
            const user= await User.findOneAndRemove ({_id:req.params.userID});

            if(!user) {
                return res.status(404).json({ message: 'No user found.'});
            }
            res.json({message: 'User has been deleted.'});

        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // add a friend
    async addFriend(req, res){
        try{
            const user=await Users.findOneAndUpdate(
                {_id:req.params.userID},
                {$addToSet: {friends: req.body}},
                {runValidators: true}
            );
            return res.status(200).json(user);
        }catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },
    // delete friend
    async deleteFriend(req, res) {
        try{
            const user=await Users.findOneAndRemove(
                {_id:req.params.userID},
                { $pull: {friends:req.body}},
                { runValidators:true}
            );
            return res.status(200).json(user)
        }catch (err) {
            console.log(err);
            res.status(500).json(err)
        };
    },
    // create new thought
    async addThought(req,res){
        try{
            const user=await Users.findOneAndUpdate(
                {_id:req.params.userID},
                { $addToSet:{thoughts:req.body}},
                { runValidators:true}
            );
            return res.status(200).json(user);
        }catch (err) {
            console.log(err);
            res.status(500).json(err)
        };
    },
    // edit a thought
    async editThought(req, res){
        try{
            const thought=await Users.findOneAndUpdate(
                {_id:req.params.userID},
                { $set: {thoughts:req.body.post}},
                { runValidators:true}
            );
            return res.status(200).json(thought);
        }catch (err) {
            console.log(err);
            res.status(500).json(err)
        };
    },

    // delete a thought
    async deleteThought(req,res){
        try{
            const thought=await Users.findOneAndRemove(
                {_id:req.params.userID},
                { $pull: {thoughts:req.body.postID}},
                { runValidators:true}
            );
            return res.status(200).json(thought);
        }catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    }
};