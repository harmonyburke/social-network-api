const {Schema, model}= require('mongoose');

const thoughtSchema= new Schema( 
    {
        post:{
            type: String,
            required:true,
            max_length: 100,
        }
    }
);

const Thoughts= model('thoughts', thoughtSchema);

module.exports = Thoughts;