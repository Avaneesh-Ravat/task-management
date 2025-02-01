const express = require("express");
const app = express();
const Task = require("./models/taskSchema.js");
 
// const cors = require("cors");

const mongoose = require("mongoose");

// app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.use(express.static("public"));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/taskmanagement");
}

main().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


app.get("/", async(req, res)=>{
    // console.log("inside backend");
    let current_date = new Date().toISOString().split('T')[0];
    let high_tasks = await Task.find({date: current_date, priority:"High"});//regex to match appttern in string 
    console.log(high_tasks);
    res.render("index.ejs", {high_tasks});
});

app.listen(8080, ()=>{
    console.log("listening on port 8080");
});