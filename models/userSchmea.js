const mongoose = require("mongoose");

const task = require("/taskSchema.ejs");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
});

const User = mongoose.model("userSchema");

module.exports = User;