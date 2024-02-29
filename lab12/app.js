const express = require('express');
const app = express();

const path = require('path'); 

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const rutasArtistas = require('./routes/artistas.routes');

app.use('/', rutasArtistas);

app.use((request, response, next) => {
    response.status(404);
    response.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);