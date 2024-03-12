const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const artistasController = require('../controllers/artistas.controller');

router.use('/artistas/1', isAuth, artistasController.get_artista1);

router.use('/artistas/2', isAuth, artistasController.get_artista2);

router.use('/artistas/3', isAuth, artistasController.get_artista3);

module.exports = router;