const {Schema, model}= require('mongoose');

const thoughtSchema= new Schema( 
    {
        post:{
            type: String,
            required:true,
            max_length: 100,
        },
        postID:{
            type: Number,
            required:true
        },
    }
);

const Thoughts= model('thoughts', thoughtSchema);

module.exports = Thoughts;