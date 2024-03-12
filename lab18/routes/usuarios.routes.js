const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuarios.controller');

router.get('/login', usuariosController.getLogin);

router.post('/login', usuariosController.postLogin);

router.get('/logout', usuariosController.getLogOut);

module.exports = router;