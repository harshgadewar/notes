const express = require("express");
const app=express();
const mongoose= require("mongoose");
require("dotenv").config();
const url=process.env.MONGO_URL
const PORT= process.env.PORT || 8080;
const {noteModel}=require("./models/noteModel");
const cors= require("cors");
app.use(cors());


// app.get("/notes",async (req,res)=>{
//     let data= [
//   {
//     "title": "Grocery List",
//     "description": "Buy milk, eggs, bread, and fruits before 6 PM."
//   },
//   {
//     "title": "Project Meeting",
//     "description": "Discuss frontend design and assign tasks. Zoom link in email."
//   },
//   {
//     "title": "Workout Plan",
//     "description": "Monday: Chest & Triceps, Tuesday: Back & Biceps, Wednesday: Legs"
//   },
//   {
//     "title": "Book to Read",
//     "description": "Start 'Atomic Habits' by James Clear. Read 30 pages daily."
//   },
//   {
//     "title": "Birthday Reminder",
//     "description": "Don’t forget to wish Anjali on 25th June. Plan a surprise call!"
//   },
//   {
//     "title": "Learning Goals",
//     "description": "Finish React tutorial, build one mini-project, and revise JS basics."
//   },
//   {
//     "title": "Recipe - Pasta",
//     "description": "Boil pasta, add veggies, stir in white sauce, and cook for 5 mins."
//   },
//   {
//     "title": "Ideas for YouTube",
//     "description": "Create faceless content on web dev tips, tools, and beginner tutorials."
//   },
//   {
//     "title": "Weekend Plan",
//     "description": "Clean room, visit friend, and watch an English movie without subtitles."
//   },
//   {
//     "title": "Exam Notes",
//     "description": "Revise DBMS indexing, normalization types, and transaction properties."
//   }
// ]
// data.forEach( (item)=>{
// let newData=new noteModel({
//     title:item.title,
//     description:item.description
    
// })
// console.log(newData);
// newData.save();
// })
// console.log("data saved");
// })


app.get("/",(req,res)=>{
    res.send("hi");
})

app.post("/NotesData",async (req,res)=>{
    let data= await noteModel.find({});
    res.json(data);
})


app.listen(PORT,async ()=>{
    console.log("App is listening");
await mongoose.connect(url);
console.log("DB connected!")
})