import mongoose, { Schema } from "mongoose";

const roomModelSchema = new Schema({
  roomName: {
    type: String,
    require: false,
  },
  isPrivate: {
    type: Boolean,
    require: false,
  },
  isGroup: {
    type: Boolean,
    require: true
  },
  roomDescription: {
    type: String,
    require: false
  },
  roomPicture: {
    data: Buffer,
    contentType: String,
  },
  dateCreation: {
    type: Date,
    default: Date.now(),
  },
  createdBy: {
    type:mongoose.Types.ObjectId,
    ref:'Users'
  }, 
  isAdmin: {
    type: Boolean,
    require: true,
  },
  participantDetail: [
    {
      type: mongoose.Types.ObjectId,
      default: [],
      ref: "Users",
    },
  ]
});

export default mongoose.model("Room", roomModelSchema);


// photos: [
//     {
//       data: Buffer,
//       default:[],
//       contentType: String,
//     },
//   ],
//   replyOnTweet: [
//     {
//       type: mongoose.Types.ObjectId,
//       default: [],
//       ref: "Tweets",
//     },
//   ]