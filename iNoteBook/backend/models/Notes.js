// import mongoose from 'mongoose';
// const { Schema } = mongoose;
// const noteSchema = new Schema({
//     name:{
//         type:String,
//         require: true
//     },
//     description:{
//         type:String,
//         require: true      
//     },
//     tag:{
//         type:String,
//         default:'General'
//     },
//     date:{
//         type:Date,
//         default:Date.now
//     }
//   });

//   module.exports = mongoose.model('note',noteSchema) 


const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: 'General'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Notes', noteSchema);
