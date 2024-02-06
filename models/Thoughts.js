
const {Schema, model}= require('mongoose');
const reactionSchema=require('./Reactions')

const thoughtSchema= new Schema( 
    {
        thoughtText:{
            type: String,
            required:true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true
        },
        createdAt:{
            type: Date,
            default:Date.now
        },

        reactions:[reactionSchema]
    },
    {
        toJSON:{
            virtuals:true
        }
    }
);

const Thoughts= model('thoughts', thoughtSchema);

module.exports = Thoughts;