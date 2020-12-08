const mongoose = require('mongoose');

const Schema = mongoose.Schema
let userSchema = new Schema({
    username :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    gender: {
        type:String,
    },
    addr: {
        type:String,
    },
    dob: {
        type:String,
    },
    city :{
        type:String,
    },
    phone :{
        type:String,
        required:true
    },
    pincode :{
        type:String,
    }
})

userSchema=mongoose.model("users",userSchema);
module.exports=userSchema;
