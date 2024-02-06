const router= require('express').Router();
const {
    allUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,

}= require('../../controllers/userController');

// get all users and create a new user
router.route('/').get(allUsers).post(createUser);

// get user by id
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

// add friend
router.route('/:userID/friends/:friendId').post(addFriend).delete(deleteFriend);



module.exports=router;