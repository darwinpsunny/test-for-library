const express= require('express');
const app=new express();
const nav=[{link:'/books',name:'books'} ,{link:'/authors',name:'authors'},{link:'/signup',name:'signup'},{link:'/login',name:'login'},{link:'/admin',name:'add book'}];
const booksrouter=require("./src/routes/bookroutes")(nav);
const authorrouter=require("./src/routes/authorroutes")(nav);
const adminrouter=require("./src/routes/adminroutes")(nav);
app.use(express.static('./public'));
app.set("view engine","ejs");
app.set("views","./src/views");
app.use("/books",booksrouter);
app.use("/authors",authorrouter);
app.use("/admin",adminrouter);
app.get("/",function(req,res){
    res.render("index",{
        nav,
        title: 'library'});
});
app.get("/signup",function(req,res){
    res.render("signup",{
        nav,
        title: 'library'});
});
app.get("/login",function(req,res){
    res.render("login",{
        nav,
        title: 'library'});
});




app.listen(5000);