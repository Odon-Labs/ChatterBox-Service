import mongoose, {Schema} from 'mongoose'

const reactionModelSchema = new Schema({
    reactionType: {
        type:String,
        required:true
    },
    dateCreation:{
        type:Date,
        default:Date.now()
    },
})

export default mongoose.model('Reaction',reactionModelSchema);