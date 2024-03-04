const express = require('express');

const router = express.Router();

router.use('/artistas/1', (request, response, next) => {
    response.render(`artista1`);
});

router.use('/artistas/2', (request, response, next) => {
    response.render(`artista2`);
});

router.use('/artistas/3', (request, response, next) => {
    response.render(`artista3`);
});

module.exports = router;