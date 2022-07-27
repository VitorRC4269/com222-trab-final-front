const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(_dirname + '/dist/Angular13Crud'));

app.get('/*', (req, res)=> {
    res.sendFile(_dirname + '/dist/Angular13Crud/index.html');
});

app.listen(PORT);