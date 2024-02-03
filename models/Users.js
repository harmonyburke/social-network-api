const {Schema, model} =require ('mongoose');
const friendSchema=require('./Friends');

const userSchema= new Schema (
    {
        username : {
            type: String,
            required: true,
            max_length:50
        },
        id:{
            type: Number,
            required: true
        },
        friends : [friendSchema]
    },

);

const Users = model('users', userSchema );

module.exports = Users;