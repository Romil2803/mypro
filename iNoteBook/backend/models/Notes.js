import mongoose from 'mongoose';

const noteSchema = new Schema({
    name:{
        type:String,
        require: true
    },
    description:{
        type:String,
        require: true      
    },
    tag:{
        type:String,
        default:'General'
    },
    date:{
        type:Date,
        default:Date.now
    }
  });

  module.exports = mongoose.model('note',noteSchema) 