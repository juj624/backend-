//exercice-1

const express = require('express');
const app = express();
const port = 8000;

app.get('/authors/api', (req, res) => {
    res.send('author');
});

//exercice 2

app.get('/authors/1/', (req, res) => {
    //  res.send(`author ${req.params.name}`);
    res.send(`${authors[0].name}, ${authors[0].nationality}`)
});

app.get('/authors/2/', (req, res) => {
    res.send(`${authors[1].name}, ${authors[1].nationality}`)
});

app.get('/authors/3/', (req, res) => {
    res.send(`${authors[2].name}, ${authors[2].nationality}`)
});

app.get('/authors/4/', (req, res) => {
    res.send(`${authors[3].name}, ${authors[3].nationality}`)
});
//exercice-3

app.get('/authors/1/books', (req, res) => {
    res.send(`${authors[0].books}`)
});

app.get('/authors/2/books', (req, res) => {
    res.send(`${authors[1].books}`)
});

app.get('/authors/3/books', (req, res) => {
    res.send(`${authors[2].books}`)
});

app.get('/authors/4/books', (req, res) => {
    res.send(`${authors[3].books}`)
});
//
//exercice-4
app.get('/json/authors/:id', (req, res) => {
    let index = req.params.id - 1;
    let author = authors[index];


    res.json({
        author,
    });
});

app.get('/json/authors/:id/books', (req, res) => {
    let index = req.params.id - 1;
    let author = authors[index].books;
    

    res.json({
        author,
    });
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});


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

