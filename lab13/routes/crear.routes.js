const filesystem = require('fs');
let ctr = 1;

const express = require('express');
const router = express.Router();
const artistasController = require('../controllers/artistas.controller');

const lista = [{
    nombre: "Aquí empieza tu top", 
    imagen: "https://cdn-icons-png.flaticon.com/512/44/44522.png",
    descripcion: "Empieza a añadir tus artistas en la página de `Armar tu propio Top`"
}];


router.get('/vis', (request, response, next) => {
    response.render('visualiza', {
        lista: lista
    });
});

router.get('/armar', artistasController.get_armar);

router.post('/armar', (request, response, next) => {
    console.log(request.body);
    lista.push(request.body)
    let nombre = request.body.nombre;
    let imagen = request.body.imagen;
    let desc = request.body.descripcion;
    let top = `\nartista ${ctr}:\n${nombre}\n${imagen}\n${desc}\n`;
    ctr++;
    filesystem.appendFileSync('Top.txt', top);

    response.redirect('/');
});

module.exports = router;