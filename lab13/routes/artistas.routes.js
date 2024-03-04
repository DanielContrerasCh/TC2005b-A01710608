const express = require('express');
const router = express.Router();

const artistasController = require('../controllers/artistas.controller');

router.use('/artistas/1', artistasController.get_artista1);

router.use('/artistas/2', artistasController.get_artista2);

router.use('/artistas/3', artistasController.get_artista3);

module.exports = router;