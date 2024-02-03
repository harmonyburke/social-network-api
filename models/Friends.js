const {Schema, model}= require('mongoose');

const friendSchema = new Schema(
    {
        username:{
            type: String,
            required:true
        },
        id:{
            type: String,
             required:true
        }
    }
);

const Friends =model ('friends', friendSchema);

module.exports=Friends;