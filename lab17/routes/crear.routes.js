const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const crearController = require('../controllers/crear.controller');

router.get('/vis', isAuth, crearController.get_list);

router.get('/armar', isAuth, crearController.get_armar);

router.post('/armar', isAuth, crearController.post_armar);

router.get('/vis/:artistaCreado_id', isAuth, crearController.get_list);

router.get('/', isAuth, crearController.get_root);

module.exports = router;