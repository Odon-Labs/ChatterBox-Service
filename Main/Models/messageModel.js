import mongoose, {Schema} from 'mongoose'

const roomModelSchema = new Schema({
    message: {
        type:String,
        required:true
    },
    dateCreation:{
        type:Date,
        default:Date.now()
    },
    mentionDetail:{
        type:String,
        required:true
    },
    photos:[{
        data:Buffer,
        contentType:String
    }],
    replyOnTweet:[
        {
            type:mongoose.Types.ObjectId,
            default:[],
            ref:'Tweets'
        }
    ],
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'Users'
    }
})

export default mongoose.model('Tweets',tweetSchema);