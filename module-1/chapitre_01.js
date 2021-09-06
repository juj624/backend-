const express = require('express');
const app = express();
const port = 8000;

app.get('/json/authors/:id/books', (req, res) => {
    let index = req.params.id - 1;
    let author = authors[index].books;


    res.json({
        author,
    });

app.listen(port, () => { 
    console.log('Server app listening on port ' + port);
    });
});