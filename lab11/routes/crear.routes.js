const filesystem = require('fs');
let ctr = 1;

const express = require('express');
const router = express.Router();

router.get('/armar', (request, response, next) => {
    response.render(`armar`);
});

router.post('/armar', (request, response, next) => {
    console.log(request.body);
    let nombre = request.body.nombre;
    let imagen = request.body.imagen;
    let desc = request.body.descripcion;
    let top = `\nartista ${ctr}:\n${nombre}\n${imagen}\n${desc}\n`;
    ctr++;
    filesystem.appendFileSync('Top.txt', top);

    response.redirect('/');
});

module.exports = router;