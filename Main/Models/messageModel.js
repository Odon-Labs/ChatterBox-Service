import { body } from 'express-validator';
import mongoose, {Schema} from 'mongoose'

const messageModelSchema = new Schema({
    message: {
        type:String,
        required:true
    },
    isPinned: {
        type: Boolean,
        require: false
    },
    dateCreation:{
        type:Date,
        default:Date.now()
    },
    editDate:{
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
    mentions:[
        {
            type:mongoose.Types.ObjectId,
            default:[],
            ref:'Users'
        }
    ],
    senderId:{
        type:mongoose.Types.ObjectId,
        ref:'Users'
    },
    isInGroup: {
        type: Boolean,
        default: false
    },
    receiverIds:[
        {
            type:mongoose.Types.ObjectId,
            default:[],
            ref:'Users'
        }
    ],
    reactions:[{
        type: mongoose.Types.ObjectId,
        default: [],
        ref: "Reaction"
    }],
    replies: [{
        type: mongoose.Types.ObjectId,
        default: [],
        ref: "Message"
    }],
    isForwared: {
        type: Boolean,
        require: false
    },
    isShared: {
        type: Boolean,
        require: false
    }
})

export default mongoose.model('Message',messageModelSchema);