const router= require('express').Router();
const {
    allUsers,
    getUser,
    createUser,
    deleteUser,
    addFriend,
    deleteFriend,
    addThought,
    deleteThought,
    editThought,
}= require('../../controllers/userController');

// get all users and create a new user
router.route('/').get(allUsers).post(createUser);

module.exports=router;