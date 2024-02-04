const {Schema, model} =require ('mongoose');
const friendSchema=require('./Friends');
const thoughtSchema=require('./Thoughts');

const userSchema= new Schema (
    {
        username : {
            type: String,
            required: true,
            max_length:50
        },
        userID:{
            type: Number,
            required: true
        },
        friends : [friendSchema],

        thoughts: [thoughtSchema]
    },

);

const Users = model('users', userSchema );

module.exports = Users;