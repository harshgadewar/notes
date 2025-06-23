const {Schema}= require("mongoose");
const {model}=require("mongoose");

const noteSchema=new Schema({
    title:String,
    description:String
});

const noteModel=new model("note",noteSchema);

module.exports={noteModel};