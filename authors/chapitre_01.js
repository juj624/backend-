//exercice-1

const express = require('express');
const app = express();
const port = 8000;

app.get('htttp: author/API', (req, res) => {
    res.send('Hello world !!');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});