const mongoose=require("mongoose")


mongoose.connect("mongodb://localhost:27017/library", {useNewUrlParser: true, useUnifiedTopology: true});
const Schema=mongoose.Schema;
const BooksSchema= new Schema({
    title:String,
    author:String,
    genre:String,
    image:String
});
const bookdata=mongoose.model("bookdata",BooksSchema);
module.exports=bookdata;