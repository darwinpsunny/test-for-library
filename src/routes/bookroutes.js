const express= require('express');

const booksrouter=express.Router();
function router(nav){
    var books=[
        {
            title:"tom & jerry",
            author:"Joseph barbera",
            genre:"cartoon",
            img:"data:image/png;base64,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"
        },
        {
            title:"pathumeda adu",
            author:"Basheer",
            genre:"Malayalam",
            img:"data:image/jpeg;base64,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"
        },
        {
            title:"Harry Poter",
            author:"J k Rowling",
            genre:"Fantasy",
            img:"data:image/jpeg;base64,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"
        },
    ];
    booksrouter.get("/",function(req,res){
        res.render("books",{
            nav,
            title: 'library',
            books});
    });
    booksrouter.get("/:i",function(req,res){
        const i=req.params.i
        res.render("book",{
            nav,
            title: 'library',
            book:books[i]

        })
    
    });
    return booksrouter;
}

module.exports =router;