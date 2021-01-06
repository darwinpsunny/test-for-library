const express= require('express');

const adminrouter=express.Router();
const bookdata=require("../model/bookdata")
function router(nav){
    adminrouter.get("/",function(req,res){
        res.render("addbook",{
            nav,
            title: 'library'});
    });
    adminrouter.get("/add",function(req,res){
        
        var item={
            title: req.query.title,
            author: req.query.author,
            genre: req.query. genre,
            image: req.query.image,
        }
        var book=bookdata(item)
        book.save();
        res.redirect('/books');
    })
    return adminrouter;

}
module.exports=router;