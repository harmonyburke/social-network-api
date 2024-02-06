const {Schema, Types}=require('mongoose');
const thoughtSchema=require('./Thoughts');

const reactionSchema= new Schema(
    {
        reactionId:{
            type:Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody:{
            type: String,
            required:true,
            max_length: 280
        },
        username:{
            type: String,
            required:true
        },
        createdAt:{
            type: Date,
            default: Date.now
        }

    }
);

module.exports= reactionSchema;
