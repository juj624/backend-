

// de façon dynamique //
const express = require('express');
const app = express();
const PORT = 8000;
var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]
//http://localhost:8000
app.get('/', ( req, res) => {
    res.send('authors api');
});

app.get('/json/authors/:id',(req, res) =>{
    var id = req.params.id-1
    var author = authors[id];

    res.json({
        name: author.name,
        nationality: author.nationality,
    });
    
});


app.get('/json/authors/:id/books',(req, res) =>{
    var id = req.params.id-1
    var author = authors[id];

    res.json({
        books: author.books,
    });
    
});





app.listen(PORT, ()=>{
console.log('listen to PORT');
});

