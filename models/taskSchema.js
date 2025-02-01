const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    task:{
        type: String,
        required: true,
    },
    priority: {
        type: String,
    },
    status:{
        type: String,
    }
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;