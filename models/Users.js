const {Schema, model} =require ('mongoose');
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
        friends : [{
            type: Schema.Types.ObjectId,
            ref: 'users'
        }],

        thoughts: [{
            type: Schema.Types.ObjectId,
            ref:'thoughts'
        }]
    },

);

const Users = model('users', userSchema );

module.exports = Users;