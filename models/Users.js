const {Schema, model} =require ('mongoose');
const thoughtSchema=require('./Thoughts');

const userSchema= new Schema (
    {
        username : {
            type: String,
            required: true,
            unique:true,
            trimmed:true
        },
        email:{
            type: String,
            unique: true,
            required:true,
            runValidators:true
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
    {
        toJSON: {
            virtuals:true
        }
    }

);

const Users = model('users', userSchema );

module.exports = Users;